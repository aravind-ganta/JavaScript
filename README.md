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

## The Scope Chain, Scope & Lexical Environment
1. **`Scope`** is where we can access any specific variable or function in our code. If there is some **`var b`**, where can I access the **`var b`** that is the scope of **`var b`**.  Scope of a variable is directly dependent on the lexical environment.
2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
4. The JS engine first searches for a variable in the current local memory space, if it not found here it searches for the variable in the lexical environment of its parent, and if it still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
5. The mechanism of searching variables in the subsequent lexical environments is known as **`Scope Chain.`** If a variable is not found anywhere, then we say that the variable is not present in the scope chain.
6. The inner functions can access variable of outer functions up to global execution context (hierarchical parent Lexical Environment). but the outer functions or global execution context can't access variables of insides functions.

**Summary:**

Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory. Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked. Global execution context holds reference to null. JavaScript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed. This mechanism is called SCOPE CHAIN. If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the browser’s console.

**Note:**

**`Lexical environment:`** The Local memory (Created and goes together with 1st phase of corresponding execution context) along with Lexical environment with the parent! and every time the lexical environment of the corresponding context is used, it references to its parent Lexical environment.

> for simply understanding, I will try it as `'an onion example'`, see when one layer of onion(a variable) covers the layer inside it, it also covers the inner layers inside that layer and a point on our first layer of onion encloses inner layers our inner layer(variable and function inside the layer) gets covered by our first layer(can access the variable on the context) and the second layer(under first layer) encloses the third layer(innermost layer)still covered by 1st layer(can access the variable on layer)

scope chain is somewhat like DFS algorithm the difference is in SCOPE chain -> it is going to find the variable till it reaches the last parent lexical environment (if found in some parent's lexical then return from there) and in DFS it deep down from branch to branch (till child) until the element is found.

**`Just a note regarding scope chain for let and const:`**
If let variable is declared normally without a block suppose inside a function, they will get lexically inherited to lower nested scopes, but if they are declared in a block, they are not available within the same function outside that block of-course but are not even inherited lexically in nested scopes. This means that the block memory scope is not part of the lexical scope chain. 

```
Try the below 2 functions and one can see the difference:
function x() {
    let a = 10;
    function y() {
    	console.log(a);
    }
    y();
}
x();
//a will be available in the scope chain to be accessible
 
function x() {
    {let a = 10;}
    function y() {
    	console.log(a);
    }
    y();
}
x();
//a won't be available in the scope chain, and we get a reference Error

Case: 1 (we are just accessing the outer function variable as there is no variable named b in the inner function)
function a(){
    var b = 10
    c()
    function c(){
    	console.log(b)}}
a()  #here it will print 10
 
Case: 2 (we have created the local variable to funtion c named b so when the engine will look for b it will get its first encounter in inner funtion c only whose value is 5 )
function a(){
    var b = 10
    c()
    function c(){
    	var b = 5
    	console.log(b)}}
a() #here it will print 5
 
Case: 3 (In this case we have created the variable b in function c. So that means b variable in function is now separate scope than the outer funtion a.
But when we try to access the b in c before it is assigned we will received undefined as explaion in his previous video.
had  been  this python  would have received error in this case)
function a(){
    var b = 10
    c()
    function c(){
    	console.log(b)
    	var b = 5  }}
a()   #here it will print undefined

```
 
