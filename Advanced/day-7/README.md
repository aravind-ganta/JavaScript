## Higher-Order Functions ft. Functional Programming

**`Functional Programming:`** Thinking of logic in terms of smaller functions and passing them into another function and treating functions as values.

**Things learned:**

1. Follow **`DRY (Don't Repeat Yourself)`** principle while coding. Use functions to stop writing repeating line of codes.
2. First-class functions are JavaScript functions that can behave like variables. They can also be passed as arguments to higher-order functions. Higher-order functions are functions that return a function or take in a function as an argument.
3. It is this ability that function can be stored, passed, and returned, they are called first class citizens.
4. If we use Array.prototype.function-name. This function is accessible to any array in your code.

**Code:**

```
// I really love javascript after watching your videos. Pls cover the below code in any upcoming video. I really pulled out my ears after seeing the output.
var funcs = [];
for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    console.log("Test No. " + i);
  };
}
for (let j = 0; j < 3; j++) {
  funcs[j]();
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
  diameter() {
    return 2 * this.radius;
  }
}
const circle = new Circle(2);
console.log(circle.area());
console.log(circle.diameter());

// When I use arrow function for Array.prototype.calculate, output is returned as blank array.
Array.prototype.calculate = (logic) => {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
//  but when it is used for normal anonymous function, Working fine.
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
Anyone please explain?
```

---

## map, filter & reduce.

**`Things learned:`**

1. map method is used when we want transformation of whole array.
2. filter is used when we want to filter the array to obtain required value.
3. reduce is used when we want to reduce the array to single value. eg (max, min, avg, sum, difference etc).
4. reduce passes two arguments one function (which includes accumulator and initial value as argument itself) and another initial value of accumulator.
5. Homework solution:

```
const users = [
           	{ firstName: "Akshay", lastName: "Saini", age: 26 },
           	{ firstName: "Donald", lastName: "Trump", age: 75},
           	{ firstName: "Elon", lastName: "Must", age: 50},
           	{ firstName: "Deepika", lastName: "Padukone", age: 28}
];
const output = users.reduce(function(acc, curr) {
           	if (curr.age < 30) {
                acc.push(curr.firstName);
           	}
           	return acc;
} , [ ] );
console.log(output);
```

**`Summary:`**

In Map's callback we return value that will override the original value of array in output array

In filter's callback we return boolean to instruct filter whether to include that element in output array or not

In reduce callback we must return whatever accumulated at the end.
