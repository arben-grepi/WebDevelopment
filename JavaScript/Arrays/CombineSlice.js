const first = [1, 2, 3];
const second = [4, 5, 6];

//Note that these copy the reference of the object. If we make changes to the
//first and second array, the combined array will be affected.
const coombined = first.concat(second);

console.log(coombined);

//starts removing from index 2 and ends removing at index 4
console.log(coombined.slice(2, 4));
console.log(coombined.slice(2));

//if we want to make a new array with the elements of the first and second.
//recommended
const combined2 = [...first, "b", ...second];

//ITERATING ARRAYS
// for (let num of combined2) console.log(num);

console.log("foreach");
combined2.forEach((num, index) => {
  console.log(num + " " + index);
});

//JOINING ARRAYS
const numbers = [1, 2, 3];
const joined = numbers.join("-");
console.log(joined);
