module.exports = function Log(req, res, next) {
  console.log("Logging...");
  next();
};
