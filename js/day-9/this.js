"use strict";
// this in global space
console.log(this); // this keyword in global space will always have the value of global object. In browser global object === window , but inside node js the value of global object === global

// this inside a
// this keyword works differently in strict mode and in non-strict mode.
function x() {
  //  Inside a function, the value of "this" can be undefined in strict mode or the global object in non-strict mode.
  console.log(this);
}
x();

// this in non-strict mode- (this substitution)
// If the value of "this" keyword is undefined or null "this" keyword will be replaced with globalObject only in non-strict mode.

// this value depends on how this is called (window)
// in strict mode
x(); // undefined
window.x(); // window

// this inside a objects method
// difference btw function and method.
// if you create a function inside an object it is called as a method.
const student = {
  name: "Aravind",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();

// call apply bind methods(sharing methods) - student2
// "call," "apply," and "bind" are important functions used to manipulate the value of "this" when calling methods and sharing them between objects.
const student2 = {
  name: "Deepika",
};
// Suppose I want to share the method printName with student2 object, how can we do?
// we can do by overriding the value of this keyword inside printName method
student.printName.call(student2);

// this inside arrow function - enclosing lexical
// Arrow functions don't have their own "this" keyword they take the value of the lexical enviornment where they are enclosed.
const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj.x();

// this inside nested arrow function
const obj2 = {
  a: 10,
  x: function () {
    // console.log(this);
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj2.x();

// this inside DOM
// In the context of DOM elements, 'this' refers to the specific HTML element being interacted with
