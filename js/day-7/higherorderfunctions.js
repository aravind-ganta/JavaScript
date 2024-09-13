const arr = [5, 1, 3, 2, 6];
// Double - [10, 2, 6, 4, 12]
// Tripple - [15, 3, 9, 6, 18]
// Binary - ["101", "1", "11", "10", "110"]

// map functions takes callback function
function double(x) {
  return x * 2;
}
const Double = arr.map(double);

// First Class Functions
const Tripple = arr.map(function tripple(x) {
  return x * 3;
});

// using Arrow Function
const Binary = arr.map((x) => x.toString(2));

console.log(Double);
console.log(Tripple);
console.log(Binary);

// filter even, odd values
function isOdd(x) {
  return x % 2;
}
const Odd = arr.filter(isOdd);
const Even = arr.filter(function (x) {
  return x % 2 == 0;
});
const GreaterThan4 = arr.filter((x) => x > 4);

console.log(Odd);
console.log(Even);
console.log(GreaterThan4);

// sum or max
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findSum(arr));
console.log(findMax(arr));

const Sum = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

const Max = arr.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(Sum);
console.log(Max);

const users = [
  { firstName: "Aravind", lastName: "Ganta", age: 25 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Deepika", lastName: "Padukone", age: 25 },
];

// list of full names
const fullNames = users.map((x) => x.firstName + " " + x.lastName);
console.log(fullNames);

// {age:count}
const ageCount = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(ageCount);

// filter people age<30
const Age = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(Age);

const output = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(output);
