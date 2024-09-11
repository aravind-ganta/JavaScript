## Javascript
---
This repo helps to learn and revise Javascript Concepts.

## How JavaScript Works? Execution Context

> **`Everything in JavaScript happens inside an Execution Context.`**

Execution context has two components:
1.	**`Memory Component [Variable environment]:`** This is the place where all variables and functions are stored as key value pairs. 
Example: `{key: value || n:2;}`
2.	**`Code Component [Thread of execution]:`** This is the place where code is executed one line at a time.

**Note:**
* JavaScript is a `synchronous single-threaded language.`
* `Single threaded` means JavaScript can execute once command at a time.
* `Synchronous single-threaded` that means JavaScript can execute one command at a time in a specific order.

---

## How JavaScript Code is executed? Call Stack
1. When a JavaScript code is executed, Execution Context is created. It is called as **`Global Execution Context.`**
2. JavaScript program is executed in TWO PHASES inside Execution Context.
    1. **`MEMORY CREATION PHASE:`** In this Phase, Memory is allocated to all the variables and functions which are present in the global scope. Special keyword **`Undefined`** is allocated in case of variables and literally the whole function in case of functions.
    2. **`CODE EXECUTION PHASE:`** In this Phase, code is executed line by line.
3. When a Function is invoked, a new execution context is created, and the same process is followed.
4. **`Return`** keyword returns the control of the program back to the place where it was invoked. and Execution Context of the Function is DELETED from Stack.
5. **`CALL STACK`** is a stack which maintains the ORDER of execution of Execution Contexts. It CREATES Execution Context whenever a Program starts, or a Function is invoked, and it pops out the Execution Context when a Function or Program ENDS.

**Note:**

* Variable declarations are scanned and are made `undefined.` Function declarations are scanned and are made available.
* `Call Stack` is also Known As **`Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack.`**


---


## Hoisting in JavaScript (variables & functions)
1. **`Hoisting:`** Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore, it is possible to call a function before initializing it.
2. In JS, before the code is executed, the variables get initialized to **`undefined`** and Function definition is stored AS IT IS.
3. **`UNDEFINED`** is special keyword used in memory creation phase to allocate memory to variables for a small period till it is assigned the value whereas **`Not Defined`** means the variable is not declared in the code.
4. Arrow functions enact as variables and get **`undefined`** during the memory creation phase and we will get error that function() is not present in the program when function is invoked before declaration.

**Note:**

During compilation phase, just microseconds before your code is executed, it is scanned for function and variable declarations. All these functions and variable declarations are added to the memory inside a JavaScript data structure called **`Lexical Environment`**. So that they can be used even before declaration in the source code.

**`What is a Lexical Environment?`**

A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object] or primitive value).

This is what a lexical environment conceptually looks like:
```
LexicalEnvironment = {
  Identifier:  <value>,
  Identifier:  <function object>
}

```

In short, a lexical environment is a place where variables and functions live during the program execution.

A quick suggestion, you could also cover another scenario where name of variable and function is same. 
```
Eg:
var abc = 2;
function abc () {...}
abc();
```


---


## How functions work in JS & Variable Environment
1. First of all the Global Execution Context will be created. Memory will be allocated to all functions and variables and GEC will be pushed in the call stack.
2. Now, Whenever there will be a function invocation a new Execution Context will be created which will be limited to this function only and it will be pushed to the call stack.
3. When the function is done executing, its execution context is deleted from the stack and the control goes back to the place where it was invoked.
4. At Last when the whole code is executed, even the Global Execution Context is removed from the Call Stack.

**Note:**

Function invoking is when it gets called automatically (like constructors). Function calling is when you call a function yourself in a program.


---

## SHORTEST JS Program, window & this keyword
1. **`Shortest Program in JS: Empty JS file.`** when any program is run, JS Engine creates global EC.
2. **`window object`** is created by the JS engines of the respective browsers when global execution context is created. Variables present in a global space can be accessed by a window object. (like window.a)
3. whenever an execution context is created **`this object`** is also created. At the global level this points to the global object (window object in case of browsers).

```
var a=10;
console.log(a);
console.log(window.a);
console.log(this.a);
```

**Note:**
1. **`Global Space:`** Anything that is not inside a function, is in the global space. Whatever code we write in global space gets attached to this global object (Window).
2. In global space, **`(this === window)`** object.
3. Why do window object is accessible even after the global execution context is removed? Seems like it is stored somewhere else.


---

## undefined vs not defined in JS
1. **`Undefined`** is a Special Placeholder which is used to reserve memory for the variables in the memory creation phase. Even before a single line of code is executed JS engine assigns undefined to the variables.
2. If we try to console or access any variable which is not declared in the code, then we get **`Not Defined`** error. This case comes in error where JS engine neither find that variable nor its placeholder and cannot find the variable in 1st phase of context. (Memory allocation context)
3. JS is a **`loosely or weakly typed language`** means it doesn’t attach its variables to specific data types like in C++ and java. We can use same variable to store String, Integer, Boolean type values.

```
Example:
var a;
console.log(a);
a=10;
console.log(a);
a="hello JS";
console.log(a);
```

**Note:**
1. Remember **`undefined !== not defined`**, Because undefined means variable is declared but no value is Assigned and not defined means variable is not even declared.
2. **`undefined`** keyword is like putting a towel for preserving a seat in public transport bus. remember the nice old hack.