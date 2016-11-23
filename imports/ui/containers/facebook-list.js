import { composeWithTracker } from 'react-komposer';
import { Facebooks } from '../../api/facebook/facebook.js';
import { FacebookList } from '../components/facebook-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('facebooks');
  if (subscription.ready()) {
    const facebooks = Facebooks.find({}, { sort: { date: -1 }, limit: 5 }).fetch();
    onData(null, { facebooks });
    console.log('les documents  Facebook sont prêt');
  }
  else {
    console.log('les documents Facebook ne sont pas prêt');
  }
};

export default composeWithTracker(composer, Loading)(FacebookList);
