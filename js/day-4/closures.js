// closures
function fn() {
  let c = 21;
  function y() {
    let b = 14;
    function z() {
      let a = 7;
      console.log(a);
      console.log(b);
      console.log(c);
    }
    b = 10;
    z();
  }
  y();
}
fn();

// CLosures interview
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("Hello!");
close();

//counter
function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
