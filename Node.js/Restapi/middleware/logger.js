function log(req, res, next) {
  console.log("Logging..");
  //without next, we wouldnt be able to pass control to another middleware function
  //and our request ends up hanging here..
  next();
}

module.exports = log;
