// setTimeout
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello!");
}
x();

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Hello!");
}
x();

function closures() {
  for (var i = 1; i <= 5; i++) {
    let x = i;
    setTimeout(() => {
      console.log(x);
    }, i * 1000);
  }
  console.log("hi");
}
closures();

// One more way to solve that problem:
function x(i) {
  var a = i;
  setTimeout(() => {
    console.log(a);
  }, a * 1000);
}
for (var i = 1; i <= 5; i++) {
  x(i);
}
