
import CryptoJS from 'crypto-js';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Twit } from '../../startup/server/twitter.js';
import { Tweets } from './twitter.js';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


const { settings } = Meteor;
const getTweets = Meteor.wrapAsync(Twit.get, Twit);


Meteor.methods({
  getTweet() {
    return getTweets('search/tweets', { q: 'from:benoithamon since:2011-11-11', count: 5 });
  },
});


// export const insertTweet = new ValidatedMethod({
//   name: 'tweet.insert',
//   validate: new SimpleSchema({
//     title: { type: String },
//   }).validator(),
//   run(tweet) {
//     Tweets.insert(tweet);
//   },
// });
