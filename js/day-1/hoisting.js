getName(); // Hello Javascript
console.log(x); // Uncaught ReferenceError: x is not defined, when x is not declared.
console.log(getName); // logs whole function to console.

// Uncaught TypeError: getName2 is not a function, when getName2 is invoked before declaration.
// getName2();
console.log(getName2); // undefined
var x = 7;
function getName() {
  console.log("Hello Javascript");
}
// gets undefined during the memory creation phase.
var getName2 = (x) => {
  return x;
};
// behaves similar to arrow functions.
var getName3 = function () {
  console.log("Hello Javascript");
};

getName2();
console.log(getName2(x)); // 7
getName3(); // Hello Javascript
console.log(getName3); // logs whole function to console.
