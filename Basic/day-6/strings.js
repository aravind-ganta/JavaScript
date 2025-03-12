/**This file contains code related to Strings in JS */

const sum = (a, b) => a + b;

const total = `The sum is ${sum(2, 3)}`;
const numbers=`
    2
    3
`;
console.log(numbers, total);

//String Escape Characters (\', \", \\, \b, \f, \n, \r, \t, \v)
const greeting=`Hi, Aravind\nHow are you?`;
console.log(greeting);

// String Methods
const name = 'Aravind';
console.log(name.length); //7
console.log(name[0]); //A
console.log(name[name.length-1]); //d

console.log(name.toLowerCase()); //aravind
console.log(name.toUpperCase()); //ARAVIND
console.log(name.charAt(5)); //n
console.log(greeting.replace('Hi', 'Hello'));
console.log(greeting.includes('Aravind')); //true
console.log(greeting.substring(0, 11)); //Hi, Aravind
console.log(greeting.indexOf('Aravind', 0)); //4
console.log(greeting.lastIndexOf('Hello')); //-1
console.log(greeting.startsWith("Hi")); //true
console.log(greeting.endsWith("Hello")); //false
console.log(greeting.slice(4,11)); //Aravind
console.log(name.repeat(3)); //AravindAravindAravind
console.log('  Hello, Aravind! '.trim()); //Hello, Aravind!