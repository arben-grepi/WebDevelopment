var yhteen = function (luku1, luku2) {
  return luku1 + luku2;
};

// Käytetään  mielummin tätä
var yhteen2 = (luku1, luku2) => {
  return luku1 + luku2;
};

//factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const myCircle = createCircle(1);
console.log(myCircle);

//we can also copy an object into another object
//we can also do it like this (not a loop)
const another2 = Object.assign({}, myCircle);
console.log(another2);

//constructor function
//this one is more familiar with developers who are based in C# or java
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const myCircle2 = new Circle(4);
console.log(myCircle2);

//there is no difference betweeen these, pick one pattern and stick to that

//Object
let post = {
  title: "",
  body: "",
  author: "",
  views: 0,
  comments: [
    { author: "", body: "" },
    { author: "", body: "" },
  ],
  isLive: false,
};

//Instead of creating an empty object, we can create a function that can create objects
//we should require as little info as possible in the parameters
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = {};
  this.isLive = false;
}

const newPost = new Post();
console.log(newPost);
