const person1 = "John";
const person2 = "Jane";
const person3 = "Joshua";

const secret_phrase = "This is a secret phrase";

// console.log(module);

// exports specific variables to be available for other modules
// variables/functions that are not exported will not be available to other modules
module.exports = {person1, person2, person3};