// const means that we can not assign cirle to a new object "const cirle = {}"
// IT DOES NOT MEAN that we cant or remove properties
const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {};

delete circle.color;
delete circle.draw;

console.log(circle);
