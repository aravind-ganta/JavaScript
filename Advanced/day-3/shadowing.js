// Example 1:
let x = 10; // Outer scope variable
function example() {
  let x = 20; // Inner scope variable, shadows outer 'x'
  console.log(x); // Prints 20
}
example(); // function call
console.log(x); // Prints 10

// Example 2:
var a = 199;
{
  var a = 10;
}
console.log(a);
