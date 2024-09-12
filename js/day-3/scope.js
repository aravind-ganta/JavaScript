// a will be available in the scope chain to be accessible
function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();

// a won't be available in the scope chain, and we get a reference Error
function x() {
  {
    let a = 10;
  }
  function y() {
    console.log(a);
  }
  y();
}
x();

// Case: 1 (we are just accessing the outer function variable as there is no variable named b in the inner function)
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a(); // here it will print 10

// Case: 2 (we have created the local variable to funtion c named b so when the engine will look for b it will get its first encounter in inner funtion c only whose value is 5 )
function a() {
  var b = 10;
  c();
  function c() {
    var b = 5;
    console.log(b);
  }
}
a(); // here it will print 5

// Case: 3 (In this case we have created the variable b in function c. So that means b variable in function is now separate scope than the outer funtion a.
// But when we try to access the b in c before it is assigned we will received undefined as explaion in his previous video.
// had  been  this python  would have received error in this case)
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
    var b = 5;
  }
}
a(); // here it will print undefined
