const EventEmitter = require("events"); //EventEmitter is a class

class Logger extends EventEmitter {
  log(message) {
    //SEND an HTTP request
    console.log(message);

    // raise an event
    this.emit("messageLogged", { id: 1, url: "https//:..." });
  }
}

module.exports = Logger;

//AND THIS ON THE APP.JS FILE
// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// logger.log("message");

// var url = "http://mylogger.io/log";

// function sayHelloToSomebody(message) {
//   console.log("hello " + message);
// }

//we want to make it visible from the outside. Make it public
//adding a method called log in to the module object
// module.exports.log = log;

// If we want a module to export a single function istead of an Object
// module.exports = log;

//every js file looks like this
// (function (exports, require, module, __dirname, __filename) {
//   // Your code here
//   // Assignments to `exports` make them available outside the module
//   exports.myFunction = function() {
//     // ...
//   };
// });

// IN APP.JS WE CAN CALL

// const logger = require("./logger");

// // if we exported at a single object
// // logger.log("arben");

// //if we exported a single function
// logger("arben");
