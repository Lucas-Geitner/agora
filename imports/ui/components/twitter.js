import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
// import { Meteor } from 'meteor/meteor';
import { Twitters } from '../../api/twitter/twitter.js';

//
const get_tweet = (event) => {
  event.preventDefault();
  Meteor.call('getTweet', (err, data) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success' + data);
      console.dir(data)
      for (var i = data.statuses.length - 1; i >= 0; i--) {
        // console.log(data.statuses[i])
        Twitters.insert({
          content: data.statuses[i].text,
          title: data.statuses[i].user.screen_name,
          date: new Date(),
          username: data.statuses[i].user.screen_name,
          tweetId: data.statuses[i].id_str,
        });
      }
    }
  });
};

export const Tweet = ({ tweet }) => (
  <ListGroupItem key={ tweet._id } onMouseOver= { get_tweet }>
      <div className = "text-tweet">
        { tweet.content }
      </div>
      <div>
        <a href={"https://twitter.com/intent/retweet?tweet_id=" + tweet.tweetId} className= "icon-tweet">
        <i className="icon fa fa-retweet"> </i> </a>
      </div>
  </ListGroupItem>
);
