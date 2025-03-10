// a();
// b();

// Function Statement aka Function Declaration
function a() {
  console.log("a called");
}

// Function Expression
var b = function (param1) {
  console.log(param1);
};

// Anonymus Function
// Uncaught SyntaxError: Function statements require a function name
// function () {

// }

// Named Function Expression
var c = function xyz() {
  console.log(xyz);
};
c();
// xyz(); // Uncaught ReferenceError: xyz is not defined

// First Class Functions - Ability to be used like values
// First Class Citizens
b(function xyz() {});

// Arrow Functions
const d = (x) => console.log(x);
d(3);
