## FIRST CLASS FUNCTIONS ft. Anonymous Functions

**`Things learned:`**

1.  What is Function Statement?

> Function Statement: A function statement is used to declare a named function. It uses the function keyword followed by the function name, a list of parameters (in parentheses), and the function body (in curly braces). By this we can do the Hoisting.

```
Example:
function greet(name) {
  console.log (`Hello, ${name}! `);
}
```

> Function Declaration: A function declaration is a statement that declares a named function in the current scope. It is like a function statement, but can be used inside any block, not just at the top level.

```
Example:
if (someCondition) {
  function greet(name) {
    console.log (`Hello, ${name}! `);
  }
} else {
  function greet(name) {
    console.log (`Hi, ${name}! `);
  }
}
```

2.  What is Function Expression?

> Function Expression: A function expression is used to create a function value and assign it to a variable or a property of an object. It can be either anonymous or named. We cannot do Hoisting by this because it acts like variable.

```
Example:
const greet = function(name) {
  console.log (`Hello, ${name}! `);
}
```

3.  What is Anonymous Function?

> Anonymous Function: An anonymous function is a function without a name. It can be defined using a function expression or passed as an argument to another function. It is used in a place where function is treated as value.

```
Example:
setTimeout(function () {
  console.log ("Time's up!");
}, 5000);
```

4.  What is Named Function Expression?

> Named Function Expression: A named function expression is a function expression with a name. The name can be used to refer to the function inside the function body or from outside.

```
Example:
const greet = function sayHello(name) {
  console.log (`Hello, ${name}! `);
}
greet("Alice"); // "Hello, Alice!"
sayHello("Bob"); // ReferenceError: sayHello is not defined.
```

5.  Difference b/w Parameters and Arguments?

> Parameters and Arguments: Parameters are the named variables that are defined as part of a function declaration or expression. Arguments are the values that are passed to a function when it is called.

```
Example:
function sum (a, b) {
  return a + b;
}
const result = sum (2, 3); // arguments: 2, 3; parameter names: a, b
console.log(result); // 5
```

6.  What is First Class Function or First-class citizens?

> First-Class Functions: In JavaScript, functions are first-class citizens, which means they can be treated like any other value. They can be assigned to variables, passed as arguments, and returned from functions.

```
Example:
function sayHello(name) {
  console.log (`Hello, ${name}! `);
}
const greeting = sayHello; // assigning a function to a variable
greeting("Alice"); // "Hello, Alice!"
```

> Arrow Functions: Arrow functions are a shorthand syntax for defining functions. They use the => symbol to separate the parameter list from the function body and can have an implicit return value if the body is a single expression.

```
Example:
const greet = (name) => {
  console.log (`Hello, ${name}! `);
};
const double = (x) => x * 2; // implicit return value
```

**Note:**

**`Closure:`** are function with its lexical environment.

**`Promise:`** eventually completion of asynchronous task.

**`Hoisting:`** variables are allocated memory and initialise as undefined on top of the program.

**Summary:**

1. Functions are heart of JS. They are called first class citizens or first-class functions because they can be stored in the variables, passed as parameters and arguments. They can also be returned in the function.

2. Function statement / Function Declaration: the function is normally defined and can be used later.

3. Function expression: the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out **`Uncaught TypeError`**.

4. Anonymous function: function where there is no need to define name for the function, it just can be assigned to variable.

5. Named function expression: Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

6. first class Functions / first class citizens: The Ability of use function as value,

      * used as values
      * can be passed as argument
      * can be executed inside a closured function
      * can be taken as return

---

## Callback Functions in JS ft. Event Listeners

**`what is a call back function in java script?`**

> we already know that functions are first class citizens in JavaScript, that means we can take a function and pass it to another function.
> when we a pass a function to another function, whatever the function that we are passing as an argument that we call it as call back function.

```
Example:
function x(y) {
    console.log("x");
    y ();
}
x (function y() {
    console.log("y");
});
```

in the above example function y is the call back function to the function x.
in the above example it is up to function x on when it wants to execute function y, means in the code function y will get called by function x after some time, that’s the reason we got the naming convention as call back function, this function will get called after a while back.

```
setTimeout(function a() {
    console.log("Hi")
}, 5000)
```

in the above example function a() is the call back function to the function setTimeout.

These call back functions are very powerful in JavaScript. it gives us access to the whole asynchronous world in a synchronous single threaded language.
JavaScript is a synchronous single threaded language. That means it can do one thing at a time in a single order. but using call backs we can do asynchronous operation in JavaScript.

for example, if any function or operation takes lot of time (may be 20 to 30 seconds), and if we try to execute this function using main thread (JavaScript has only one main thread), then the JavaScript won’t be able to do any other things in these 20 to 30 seconds. we should never block our main thread. that’s the reason we should always try to choose async operation which takes time.

without the concept of call back function, we won’t be able to achieve async operation in JavaScript.

**Summary:**

1. Function that is passed on as argument to another function is called callback function. If JS did not have call back function, we could not have been able to do async. Operation.
2. setTimeout helps turn JS which is single Threaded and synchronous into asynchronous. Call stack becomes empty when nothing is left to execute except async operations. It fills again when async operation execute.
3. Event listeners can also invoke closures with scope. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

**Doubts:**

**`Why is the following code showing dollars as 'not defined'?`**

```
let test = function (callback) {
  let dollars = 100;
  callback ();
};

let request = test (function () {
  console.log ("Here are your" + dollars);
});
```

> As per previous videos when the anonymous function is passed into test -> callback and invoked, it should create an execution context with access to lexical scope of parent(test) which contains 'dollar' . But the anonymous function has access to global scope only.

**`Hey friends! i have a doubt can anyone help me out?`**

- **`Do normal callback functions (not like web API setTimeout) will execute in the same way behind the scenes as setTimeout?`**
- **`If not, why we need to pass a function as an argument instead we can directly call the function inside another function? the agenda is to have control over function to invoke right?`**