//NODU MODULES
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const express = require("express");

// a middleware function that parses incoming JSON requests and makes the parsed data available under req.body.
const app = express();

//You can call the debugger:   startupDebugger("Morgan enabled...");
//In order to get the nice version, Write in cmd:  DEBUG_HIDE_DATE=true DEBUG=app:startup node index.js
//Note, if you want to turn on multiple debuggers, do: DEBUG=app:startup,app:db   or if you want all do:  DEBUG=app*
//Remove the debugger with: export DEBUG=
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");

//PROJECT FILES
const logger = require("./middleware/logger");
const authentication = require("./middleware/authentication");
const courses = require("./routes/courses");
const home = require("./routes/home");
//process.env.NODE_ENV is a standard env var. If it is not set, it will return undefined
//We can get this env var from express as well "app.get('env'). How ever, if the env var is not set, it will return undefined by default"
//We can set it to development, testing, staging or production.
// startupDebugger(`NODE_ENV: ${process.env.NODE_ENV}`);
// startupDebugger(`app: ${app.get("env")}`);

app.use(express.json());
//another build in express middleware function. It parses incoming requests with URL-encoded payloads
//URL-encoded payloads are typically used for form submissions When a form is submitted using the
//application/x-www-form-urlencoded content type, the form data is encoded in the URL format,
//where key-value pairs are separated by & and keys are separated from values by =.
//express.urlencoded({ extended: true }) allows for rich objects and arrays to be encoded into the URL-encoded format using the qs library.
//express.urlencoded({ extended: false }) uses the querystring library to parse URL-encoded data.
app.use(express.urlencoded({ extended: true }));
//with this middleware, we can serve static content. Now, we con go localhost:port/readme.txt and we get the static content of the public folder
app.use(express.static("public"));

app.use(logger);
app.use(authentication);
//Helmet is a collection of middleware functions designed to enhance the security of Express.js applications by setting various HTTP headers.
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", home);

//Configuration
startupDebugger("Application Name: " + config.get("name"));
startupDebugger("Mail Server: " + config.get("mail.host"));
startupDebugger("Mail Password: " + config.get("mail.password"));

if (app.get("env") === "development") {
  //Morgan is an HTTP request logger middleware for Node.js. It generates logs for every HTTP request made to your server, which can be useful for debugging and monitoring.
  //You can analyze these logs to identify patterns, bottlenecks, and potential problems.
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

dbDebugger("Connected to the database...");

//Route Parameters: Named segments in the route path (e.g., :year, :month) that capture values from the URL.
//Contains key-value pairs of the route parameters and their corresponding values from the URL.
// router.get("/api/posts/:year/:month", (req, res) => {
//   res.send(req.params);
// });
//For example: /api/posts/:2024/:06
//        req.params:
//         {
//          "year": "2024",
//          "month": "06"
//        }

// '/' represents the root of the website

const port = process.env.PORT || 3000;
app.listen(port, () => {
  startupDebugger(`listening on port: ${port}...`);
});
