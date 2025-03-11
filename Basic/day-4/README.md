## Functions
* JS function is a block of code designed to perform a particular task
* Functions are the main building blocks of the program. They allow the code to be called many times without repetition
```
function square(number){
    return number*number;
}
```
* **function** is the reserved JS keyword for creating a function
### Arrow Functions
* Arrow functions are similar to function expressions. It's one of the features introduced in the ES6 version of JavaScript
* They are concise and are often used for one-liners. Arrow functions are more limited than regular functions- for example, they have no concept of this whatsoever
```
const square = (number) => number * number;
```
### Parameters vs Arguments
* **Parameters** are used when defining a function, they are the names created in the function definition. Parameter is like a variable that is only meaningful inside of this function. It won't be accessible outside of the function
* **Arguments** are real values passed to the function when making a function call