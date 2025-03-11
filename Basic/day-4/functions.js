/**This file contains code for functions in JS */

// defining a function
function square(number) {
    return number * number;
}

// arrow function
const mulplyWith2 = (number) => number * 2;

// parameters vs arguments
const greet = (firstName, lastName) => {
    console.log(`Hi, ${firstName} ${lastName}`);
};

greet("Aravind", "Ganta");