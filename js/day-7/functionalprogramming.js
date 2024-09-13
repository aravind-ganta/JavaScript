const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

// calculation
const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// // in the modern ES6 syntax
// const area = (radius) => Math.PI * radius * radius;
// const diameter = (radius) => 2 * radius;
// const circumference = (radius) => 2 * Math.PI * radius;

// const calculate = (radius, logic) => {
//   const output = radius.map((elem) => {
//     return logic(elem);
//   });
//   console.log(output);
// };

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

// console.log(radius.map(area));

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
