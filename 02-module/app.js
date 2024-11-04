// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// importing modules 
const names = require('./names');
const sayHi = require('./utils');

console.log(names);

// use "for...in" loop to iterate through an object
for (const person in names) {
    sayHi(names[person]);
}
// sayHi()
