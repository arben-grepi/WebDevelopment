const http = require("http");

// const server = http.createServer();
// //the name of the event is 'connection' that you can find in the documentation
// server.on("connection", (socket) => {
//   //this will log on the consule when I go to web browser and put localhost: 3000,
//   //or whatever other port we put 'server.listen(portNum)' listener
//   console.log("new connection");
// });
// server.listen(3000);
// console.log("listening at a port 3000...");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3000);
console.log("listening at a port 3000...");
