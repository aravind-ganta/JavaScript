/* This file contains code for variables and Datatypes */

//before ES6
var variableName = "Hello World!";

//after ES6: preferred way
let greeting = "Hello!";

const myName = "Aravind";

// strings
const singleQuote = "Hello, World!";
const doubleQuote = "Hello, World!";
const backTicks = `Hello! ${myName}`;

// numbers
const wholeNumber = 5;
const decimalNumber = 3.14;

// alert("this is a string"*3);
console.log(typeof NaN); //number

// booleans
const isMale = true;

if (isMale) {
  console.log(`Hi, Mr. ${myName}`);
} else {
  console.log(`Hi, ${myName}`);
}

// Null and Undefined
let age = null;
console.log(typeof age); //object

let x;
console.log(typeof x); //undefined

// Objects: group variables
const person = {
  name: 'Aravind',
  age: 25
}
console.log(person.name); //Aravind

