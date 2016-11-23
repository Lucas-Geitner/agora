import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
// import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import { Facebooks } from '../../api/facebook/facebook.js';

const get_facebook_post = (event) => {
  event.preventDefault();
  Meteor.call('getFacebookAcessToken', (err, data) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(data);
      for (var i = data.posts.data.length - 1; i >= 0; i--) {
        // console.log(data.posts.data[i])
        Facebooks.insert({
          content: data.posts.data[i].message,
          title: 'post_facebook',
          date: new Date(),
          username: 'benoithamon',
          facebookId: data.posts.data[i].id,
        });
      }
    }
  });
};

export const Facebook = ({ facebook }) => (
  <ListGroupItem onMouseOver= { get_facebook_post } >
    { facebook.content }
</ListGroupItem>
);
