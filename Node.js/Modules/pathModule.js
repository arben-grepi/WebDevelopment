// In order to use the path module, we call it by using require, and install it in const path
const path = require("path");

var pathobj = path.parse(__filename);

console.log(pathobj);

// RETURNS
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\arben\\OneDrive\\Työpöytä\\koodausta\\Node.js\\firstApp',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }
