const numbers = [2, 3, 5, 4];
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);

const objects = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

//if we want to put the courses in alphabetical order, we do the following
//Note that if big capital letters come before small letters. So make sure every
//name is either with capital or small letters.
objects.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(objects);

