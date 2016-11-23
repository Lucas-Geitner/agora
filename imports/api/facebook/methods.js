import { Facebooks } from './facebook.js';
import FB from 'fb';
import { Meteor } from 'meteor/meteor';
var Future = Npm.require('fibers/future');

var addPostFunction = function (dataPost) {
  for (var i = dataPost.posts.data.length - 1; i >= 0; i--) {
    Facebooks.insert({
      content: dataPost.posts.data[i].message,
      title: 'post_facebook',
      date: new Date(),
      username: 'benoithamon',
      facebookId: dataPost.posts.data[i].id,
    });
  }
};

var posts = {};
Meteor.methods({
  getFacebookAcessToken: function() {
    var future = new Future();
    FB.setAccessToken('1166004480145301|88mI2J9Foum047qCVidi4ipuLGI');
    FB.api('10735142263', { fields: 'posts' }, function(err, res) {
      if ( err ) {
        future.return( err );
      } else {
        future.return( res );
      }
    });
    return future.wait();
  },
});
