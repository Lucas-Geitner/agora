import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/dburles:factory';

export const Facebooks = new Mongo.Collection('Facebooks');

Facebooks.allow({
  insert: () => true,
  update: () => false,
  remove: () => false,
});

Facebooks.deny({
  insert: () => false,
  update: () => true,
  remove: () => true,
});

Facebooks.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  content: {
    unique: true,
    type: String,
    label: 'the content',
  },
  date: {
    type: Date,
    label: 'The data of save',
  },
  facebookId: {
    unique: true,
    type: String,
    label: 'the tweet Id to retweet',
  },
  username: {
    type: String,
    label: 'the author',
  },
});

Facebooks.attachSchema(Facebooks.schema);
