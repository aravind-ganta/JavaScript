console.log(a); //Undefined
console.log(b); //Reference Error
console.log(c); //Reference Error
var a = 25;
let b = 56;
const c = 45;

var a = 26;
b = 100;
// c = 500;
// const d;

// We can access let variables memory space without putting any value in them if it precedes the usage of the variables:
console.log(a); // Would throw Reference Error here.
let a;
console.log(a); // will print undefined, same as var.
a = "Hi";
console.log(a); // will print Hi.