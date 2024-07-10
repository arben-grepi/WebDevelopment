// String primitive
const message = "Arben.Grepi";

//when we do this, JavaScript deals is with as it is an object
//turns the message string into a list with two words
const newMessage = message.split(".");

//String object
const another = new String("hi");

//prints 'string'
console.log(typeof message);
//prints object
console.log(typeof another);

//prints true
console.log(message.includes("Ar"));
//prints false
console.log(message.startsWith("Grep"));
//prits true
console.log(message.endsWith("i"));
//prints ARBEN.GREPI
console.log(message.toUpperCase());
// trims the white spaces at the beginning and end of the text
message.trim();
m;
