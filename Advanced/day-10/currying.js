// can be achieved using closures, bind method
let multiply = function (x, y) {
  console.log(x + y);
};

let multiply2 = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let multiplyByTwo = function (y) {
  let x = 2;
  console.log(x + y);
};
multiplyByTwo(5);

//same as above
let multiplyByThree = multiply.bind(this, 3, 5);
multiplyByThree(5);
