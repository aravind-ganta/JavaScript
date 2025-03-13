/**This file contains code related to es6 in JS */

// let and const
var myName = 'Aravind';
var myName = 'Hero'; //allowed
console.log(myName); //Hero

let age = 27;
// let age = 29; //SyntaxError

const password = '123456';
// password = '654321'; //TypeError

let mobile = 'One Plus';
mobile = 'Iphone'; //Allowed

//arrow function
function square(number) {
    return number * number;
}

// default params
const square2 = (number = 10) => number * number;
console.log(square2()); //100

// template strings
const sentence = `Hi, I am ${myName}, I am using ${mobile}`;
console.log(sentence); //Hi, I am Hero, I am using Iphone

// Spread
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); //6
console.log(sum.apply(null, numbers)); //6

//rest
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3)); //6
console.log(sum(1, 2, 3, 4)); //10

// Array destructuring
const companies = ['Google', 'Facebook', 'Amazon', 'Tesla'];
const [alpha, meta] = companies;
console.log(alpha); //Google
console.log(meta); //Facebook

// Object destructuring
const person = { name: 'Aravind', country: 'India', job: 'Developer' };

const { name, country, job } = person;
console.log(name); //Aravind
console.log(country); //India
console.log(job); //Developer