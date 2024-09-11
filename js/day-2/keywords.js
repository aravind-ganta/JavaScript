// window vs this
var a = 10;
function b() {
  var x = 10;
}

console.log(a); // 10
console.log(window.a); // 10
console.log(this.a); // 10

// undefined vs not defined
var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
a = "hello JS";
console.log(a); // hello JS

a = undefined; // Not a good practice.
console.log(x); // Uncaught ReferenceError: x is not defined. because x is not in global space.
