var taulukko = [1, 2, 3, "moi", { nimi: "arben", osoite: "kielotie 34" }];

console.log(Array.isArray(taulukko));

//ADDING

var numbers = [3, 4];

//lisää loppuun
numbers.push(5, 6);

// lisää alkuun
numbers.unshift(1, 2);

console.log(numbers);

//lisää keskelle.
//Parametrin menee indeksi josta halutaan aloittaa.
//Seuraavassa parametrissä kerrotaan kuinka monta elementtiä halutaan poistaaa.
//Seuraavaksi ne objektit jotka halutaan lisätä
numbers.splice(2, 0, "a", "b");

console.log(numbers);

//FINDING

var numbers = [1, 2, 3, 1, 2, 3];

console.log(numbers.indexOf(2));
console.log(numbers.indexOf("a"));
console.log(numbers.lastIndexOf(1));

//our search will begin from index of 2
console.log(numbers.indexOf(1, 2));

// this console log will print false, because there are three separate objects (two of them with similar name, but they are still different)
//They have a different place in a memory. We need to use the find method
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
//DONT DO THIS!!!
console.log(courses.includes({ id: 1, name: "a" }));

//DO THIS
//Lets say we want to see if we have a course with a name 'a' in the courses array
var course = courses.find(function (course) {
  //returns the first element that has keyvaluepair of name: 'a'
  return course.name === "a";
});

console.log(course);

course = courses.findIndex(function (course) {
  // returns -1
  return course.name === "xyz";
});

console.log(course);

course = courses.find(function (course) {
  // returns undefined
  return course.name === "xyz";
});
console.log(course);

//REMOVING ELEMENTS

numbers = [1, 2, 3, 1, 2, 3, 7];

//Poista lopusta
//palauttaa viimeisen numeron muuttujaan. Voidaan tehdä myös void tyylisesti.
const last = numbers.pop();
console.log(last);

//Poista alusta
//palauttaa ensimmäisen numeron muuttujaan. Voidaan tehdä myös void tyylisesti.
const first = numbers.shift();
console.log(first);

//Poista keskeltä
//alkaa 2 indexistä ja jättää yhden numeron pois keskeltä.
//Ei lisätä sinne mitään koska ei ole kolmatta parametriä.
console.log(numbers);
numbers.splice(2, 1);
console.log(numbers);

//Tyhjennä taulukko
numbers = [];
//or
numbers.length = 0;
//or
numbers.splice(0, numbers.length);
//or
while (numbers.length > 0) numbers.pop(); //not recommended
console.log(numbers);

//TESTING THE ELEMENTS OF AN ARRAY
numbers = [2, 3, -1, 8, 4, 3];

//this every function will  terminate if there is a negative number in a array. It will
//return true only if all the values are positivi
const allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

//returns true if there is atleast one function that is true
const some = numbers.some(function (value) {
  return value >= 0;
});

console.log(some);

//FILTERING AN ARRAY
//this filter function will add to the callback value only the positive values.
const filteredNum = numbers.filter((value) => {
  return value >= 0;
});

console.log(filteredNum);

//MAPPING AN ARRAY
let items = filteredNum.map((n) => "<li>" + n + "</li>");
console.log(items);

//we can use a join method to create a string
const htmlString = "<ul>" + items.join("") + "</ul>";
console.log(htmlString);

//we can also map numbers into an object
//if we want to return an object like this, we need to put it in an object
items = filteredNum.map((n) => ({ value: n }));

console.log(items);

//ADDING

let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);
