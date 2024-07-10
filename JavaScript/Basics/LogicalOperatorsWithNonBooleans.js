//the result of a logical expression is not necessarely true or false.
//It depends on the type of values we are comparing

// return on false || true is true
// return on false || 'Ben' is 'Ben'
// return on false || 1 is 1

// return on false || 1 || 2 is 1 NOTE THIS
//Short-circuiting
//boolean return the first truthe

// when javascript engine tries to evaluate the boolean expression, when it
// is not true or false, it will try to interpret it as TRUTHE OR FALSE

//FALSY values are:
// undefined
//null
//0
//false
//''
//NaN (not a number, we get this out of math calculations if result is not a number)

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
//here we will get defaultColor because userColor is Undefined and defaultColor
//is the first thruthe value
console.log(currentColor);

//if we change usercolor to red, now we get the first value that is truthe
userColor = "red";
currentColor = userColor || defaultColor;
//here we will get userColor because it is no longer false value.
console.log(currentColor);

//strict equality (type + value)
//means that the type and the value has to be match
console.log(1 === 1);
console.log("1" === 1);

//Lose equality
//the type doesent have to match, only the value
// ALL EXAMPLES return true
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);

//most of the time we should use strict equality operator,
//because it is the most accurate
