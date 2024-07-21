//NODU MODULES
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const express = require("express");
//DEBUGGERS
const portDebugger = require("debug")("app:port");
const morganCombined = require("debug")("app:morganCombined");
const morganTiny = require("debug")("app:morganTiny");

//ROUTES
const home = require("./routes/home");
const pays = require("./routes/pays");
const customers = require("./routes/customers");

const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", "./views");

// Middlewares (if any)
app.use(helmet());
app.use(morgan("tiny"));

// Routes
app.use("/", home);
app.use("/api/pays", pays);
app.use("/api/customers", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  portDebugger(`listening on port: ${port}...`);
});
