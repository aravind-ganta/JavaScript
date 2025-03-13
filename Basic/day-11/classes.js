/**This file contains code related to Classes in JS */

// new Keyword
const person = new Object();
person.firstName = 'Aravind';

console.log(person.firstName); //Aravind
console.log(typeof person); //object

function person2(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
}

const aravind = new person2('Aravind', 25, 'Software Engineer');
console.log(aravind);

// this Keyword
function Sentence(words){
    this.words= words;
    console.log(this);
}

const S= new Sentence('learning this Keyword');