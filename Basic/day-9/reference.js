/**This file contains code related to Value vs Reference in JS */

//Copying Numbers
let x = 1;
let y = x;

x = 2;

console.log(x); //2
console.log(y); //1

//Copying Strings
let firstPerson = "Mark";
let secondPerson = firstPerson;

firstPerson = "Austin";

console.log(firstPerson); //Austin
console.log(secondPerson); //Mark

//Copying Arrays
const animals = ["dogs", "cats"];
const otherAnimals = animals;

animals.push("llamas");

console.log(animals); //['dogs', 'cats', 'llamas']
console.log(otherAnimals); //['dogs', 'cats', 'llamas']

//Copying Objects
const person = {
    firstName: "Aravind",
    lastName: "Ganta",
};

const otherPerson = person;

person.firstName = "HariKrishna";

console.log(person); //{firstName: 'HariKrishna', lastName: 'Ganta'}
console.log(otherPerson); //{firstName: 'HariKrishna', lastName: 'Ganta'}

console.log(person === otherPerson); //true

const person1 = {
    firstName: "Aravind",
};

const person2 = {
    firstName: "Aravind",
};

console.log(person1 === person2); //false
