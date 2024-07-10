// const EventEmitter = require("events"); //EventEmitter is a class
// const emitter = new EventEmitter();

//these are similar
//We need to register a listner that will notice the event
//on or addlistener is exactly the same
// emitter.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

//Raise an logging event
const Logger = require("./logger");
const logger = new Logger();

//'messageLogged' is the name of the event. This will log
//Listener called  { id: 1, url: "https//:..." } (or what ever we have
//put in the logger file)
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("some message");
