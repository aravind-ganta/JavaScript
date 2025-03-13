/**This file contains code related to DOM in JS */

const ele = document.getElementById("heading");

console.log(ele.className);
console.log(ele.id);
console.log(ele.classlist);
console.log(ele.innerHTML);

// Creating Node
const node = document.createElement('li');
const textnode= document.createTextNode('Books');

node.appendChild(textnode);

// add to DOM
document.getElementById('category').appendChild(node);

// Traversing Nodes
const list = document.querySelector("#category");

console.log(list.firstElementChild); //prints first element of list
console.log(list.lastElementChild); //prints last element of list

const element = document.querySelector("#laptops");
console.log(element.parentElement); //prints parent of laptops
console.log(element.previousElementSibling); //prints element before laptops
console.log(element.nextElementSibling); //prints element after laptops

// Removing Nodes
element.remove();



