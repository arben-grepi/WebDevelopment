//Loops
//For, While, Do..while, For..in, For...of

console.log("FOR");
for (let i = 0; i < 5; i++) if (i % 2 !== 0) console.log(i);

console.log("WHILE");
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

console.log("DO WHILE");
i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

console.log("FOR IN");
const person = {
  name: "Mosh",
  age: 30,
};

//this prints the name of the properties (name, age) (not the value)
for (let key in person) console.log(key);

//this prints the value of the property
for (let key in person) console.log(person[key]);

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

//Starting from Echma6 (new javascript something)
//For of loop can only be used with iterable objects such as arrays and maps
console.log("FOR OF");
//prints red, green, blue
for (let color of colors) console.log(color);

//if we want to make object iterable, wi need to do the following
const circle = {
  radius: 1,
  filled: true,
  draw() {
    console.log("draw");
  },
};
console.log("OBJECTS.KEY");
for (let key of Object.keys(circle)) console.log(key);

console.log("OBJECTS.ENTRIES");
for (let entries of Object.entries(circle)) console.log(entries);

//not a loop
console.log(`IF COLOR IN CIRCLE`);
if ("radus" in circle) console.log("yes");

console.log("COPYING AN OBJECT INTO ANOTHER");
const another = {};
for (let key in circle) another[key] = circle[key];
console.log(another);

//we can also do it like this (not a loop)
const another2 = Object.assign({}, cirle);
