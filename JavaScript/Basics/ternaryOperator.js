// If a customer has more than 100 points, 
//they are a 'gold' customer, otherwise, 
//they are a 'silver' customer


let points = 110

//'type = points > 100' will return either true or false depending
//on wheather points are over or under 100.
// '?' if condition is true, the type will get value 'gold' (string instead of boolean)
// ':' if condition is false, the type will get value 'silver'
let type = points > 100 ? 'gold' : 'silver'

console.log(type)

points = 110
console.log(type)
