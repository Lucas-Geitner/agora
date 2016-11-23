import { composeWithTracker } from 'react-komposer';
import { Twitters } from '../../api/twitter/twitter.js';
import { TwitterList } from '../components/twitter-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('twitters');
  if (subscription.ready()) {
    const twitters = Twitters.find({}, { sort: { date: -1 }, limit: 5 }).fetch();
    onData(null, { twitters });
    console.log('les documents sont prêt');
  }
  else {
    console.log('les documents ne sont pas prêt');
  }
};

export default composeWithTracker(composer, Loading)(TwitterList);
