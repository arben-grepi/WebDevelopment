//Value Types
//Number, String, Boolean, Symbol, undefined, null
//Primitives are copied by their value

//Reference Types
//Object, Function, Array
//Objects are copied by their reference

let x = { value: 10 };
let y = x;
// elikkä koska {value: 10} on objecti (reference type), sitä ei varastoida muuttujaan. Muuttujaan varastoidaan
//objektin muistipaikka. Jos objektia myöhemmin muutetaan, niin silloin kaikki muuttujat osoittavat yhä samaan
//muistipaikkaan joka on muuttunut.

//katsotaan esimerkiksi mitä tapahtuu kun x.value muutetaan
x.value = 20;
console.log(x.value);
console.log(y.value);
//y.value ja x.value on molemmat 20.
