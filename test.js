// var events = require('events');
// var util = require('util');
//
// function Server(port) {
//   this.port = port;
//   this.callback = undefined;
//   console.log("creation d'un server au port: " + port)
// }
//
// util.inherits(Server, events.EventEmitter);
//
// var server = new Server(3000);
//
// server.addListener("connexion", function(){
//   console.log("Une connexion à été effectué au server" + this.port);
//   this.callback = 12;
// });
//
// server.addListener("connexion", function(){
//   console.log("Read the %j fucking callback : ", this.callback)
// })
// server.emit("connexion");
