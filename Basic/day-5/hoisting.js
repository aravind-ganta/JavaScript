/**This file contains code related to Hoisting in JS */

// variable hoisting
var myName;
console.log(myName); //undefined
myName = 'Aravind';

function greet() {
    var message;
    console.log(message);
    message = 'Hello, How are you?';
}
greet(); //undefined

// function hoisting
sayHello(); //Hello!
function sayHello() {
    console.log('Hello!');
};

sayHi(); // ReferenceError
const sayHi =()=>{
    console.log('Hi!');
};