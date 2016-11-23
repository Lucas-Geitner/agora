// import faker from 'faker';
// import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/dburles:factory';

export const Twitters = new Mongo.Collection('Twitters');

Twitters.allow({
  insert: () => true,
  update: () => false,
  remove: () => false,
});

Twitters.deny({
  insert: () => false,
  update: () => true,
  remove: () => true,
});

Twitters.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  content: {
    unique: true,
    type: String,
    label: 'the title',
  },
  date: {
    type: Date,
    label: 'The data of save',
  },
  tweetId: {
    unique: true,
    type: String,
    label: 'the tweet Id to retweet',
  },
  username: {
    type: String,
    label: 'the author',
  },
});

Twitters.attachSchema(Twitters.schema);


// Meteor.methods({
//   'tasks.insert'(text) {
//     check(text, String);

//     // Make sure the user is logged in before inserting a task
//     if (! this.userId) {
//       throw new Meteor.Error('not-authorized');
//     }
