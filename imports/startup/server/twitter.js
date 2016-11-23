// var Twit = require('twit')
import { Meteor } from 'meteor/meteor';

export const Twit = new TwitMaker({
  consumer_key:         Meteor.settings.private.twitter.apiKey,
  consumer_secret:      Meteor.settings.private.twitter.apiKeySecred,
  access_token:         Meteor.settings.private.twitter.accessToken,
  access_token_secret:  Meteor.settings.private.twitter.accessTokenSecret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
