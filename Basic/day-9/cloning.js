/**This file contains code related to Cloning in JS */

// Shallow Cloning
// Spread Operator
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers]; // Spread Operator
console.log(...numbers) //1,2,3,4,5

const copiedNumbers = numbers;

console.log(numbers === copiedNumbers); //true
console.log(numbers === newNumbers); //false

numbers.push(6);

console.log(numbers); //[1, 2, 3, 4, 5, 6]
console.log(copiedNumbers); //[1, 2, 3, 4, 5, 6]
console.log(newNumbers); //[1, 2, 3, 4, 5]

// Array.slice()
const nums = [1, 2, 3, 4, 5];
numsCopy = nums.slice();

// Cloning Objects
// Spread Operator
const person = {
    name: 'Aravind',
    age: 25,
};

const otherPerson = { ...person };

otherPerson.age = 27;
console.log(person);
console.log(otherPerson);

// Object.assign()
var A1 = { a: '2' };
var A2 = Object.assign({}, A1);

// Deep Cloning
const person2={
    firstName: 'Aravind',
    car:{
        brand:'BMW',
        color: 'blue',
        wheels: 4,
    },
};

// const newPerson={...person2}
// const newPerson={...person2, car:{...person.car}};
const newPerson=JSON.parse(JSON.stringify(person2));
newPerson.car.color='red';

console.log(person2);
console.log(newPerson);

// JSON.stringify()
const stringifiedPerson= JSON.stringify(person2);
console.log(stringifiedPerson);
// JSON.parse()
const newPerson1=JSON.parse(stringifiedPerson);
console.log(newPerson1);

newPerson1.car.color='red';

console.log(person2);
console.log(newPerson1);