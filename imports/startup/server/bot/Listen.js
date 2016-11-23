import { Meteor } from 'meteor/meteor';
import { Picker} from 'meteor/meteorhacks:picker';
// Define our routes.
  // if (req.method == "POST") {
  //   var data = req.body;
  //   console.log(params);
    // console.log();

    // if (data.object === 'page') {
    //
    // // Iterate over each entry - there may be multiple if batched
    // data.entry.forEach(function(entry) {
    //   var pageID = entry.id;
    //   var timeOfEvent = entry.time;
    //
    //   // Iterate over each messaging event
    //   entry.messaging.forEach(function(event) {
    //     if (event.message) {
    //       receivedMessage(event);
    //     } else {
    //       console.log("Webhook received unknown event: ", event);
    //     }
    //     });
    //   });
    //   res.sendStatus(200);
    //   }
    // }

var getRoutes = Picker.filter(function(req, res) {
  return req.method == "GET";
});

getRoutes.route( '/webhook', function( params, req, res, next ) {
  // Now we have access to request.body!
  if (params['query']['hub.mode'] === 'subscribe' &&
  params['query']['hub.verify_token'] === 'VictorHugo') {
    console.log("Validating webhook");
    res.statusCode = 200
    res.end(params['query']['hub.challenge']);
  } else {
      console.error("Failed validation. Make sure the validation tokens match.");
      res.statusCode = 403;
  }
});

var postRoutes = Picker.filter(function(req, res) {
  return req.method == "POST";
});


postRoutes.route('/webhook', function(params, req, res, next) {
  // ...
  console.log(req);
});


function receivedMessage(event) {
  // Putting a stub for now, we'll expand it in the following steps
  console.log("Message data: ", event.message);
}

// EAAc3NaaJYncBAHYKylNssowNngw3atV2mMYoQBCd5xUGFvV1EeDZCBLZCrW164EBKZBbZAF9ZBbZAK5EAa0ZBEVgb64T9ZCxomXZBD6VTgj6uJPQtnpP7Rrjcm8li09M6BBLZBd0vb2uDjP4zbdPyhlfJZCIa4J8NNKRbDN7Bwfp6qutAZDZD

// var postRoutes = Picker.filter(function(req, res) {
//   // you can write any logic you want.
//   // but this callback does not run inside a fiber
//   // at the end, you must return either true or false
//   return req.method == "POST";
// });
//
// postRoutes.route('/we', function(params, req, res, next) {
//   // ...
// });
