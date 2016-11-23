import { Meteor } from 'meteor/meteor';
import { Twitters } from '../twitter';

// Meteor.publish('twitters', () => Twitters.find({}, { $limit: 10 }));
Meteor.publish('twitters', () => Twitters.find({}));
