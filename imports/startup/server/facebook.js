import { Meteor } from 'meteor/meteor';
import FB from 'fb';

FB.mapi = Meteor.wrapAsync(FB.napi);
