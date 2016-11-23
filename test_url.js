// var stream = require('stream');
// var fs = require('fs');
// var readable = new stream.Readable();
// readable.setEncoding("utf8")
//
// var content = fs.readFileSync("stream.txt");
//
// readable._read = function(size) {
//   console.log('Methode Read appellée')
//   process.stdin.removeAllListeners("data").on("data", function(chunk){
//     readable.push(chunk);
//   });
// };
//   // if (content) readable.push(content);
//   // content = '';
//
// readable.on("data", function(chunk) {
//   console.log(chunk)
// });

// readable.push("Bonjour 2");
// readable.push("Bonjour 1");

// var f = function (p) {
//   console.log("coucou");
//
//   function foo() {
//     console.log("Je suis caché")
//     return 29
//   }
//   return foo()
// };
//
// f()
// var c = f();
// console.log(c)
