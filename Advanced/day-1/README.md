## How JavaScript Works? Execution Context

> **`Everything in JavaScript happens inside an Execution Context.`**

Execution context has two components:

1. **`Memory Component [Variable environment]:`** This is the place where all variables and functions are stored as key value pairs.
   Example: `{key: value || n:2;}`
2. **`Code Component [Thread of execution]:`** This is the place where code is executed one line at a time.

**Note:**

- JavaScript is a `synchronous single-threaded language.`
- `Single threaded` means JavaScript can execute once command at a time.
- `Synchronous single-threaded` that means JavaScript can execute one command at a time in a specific order.

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

- Variable declarations are scanned and are made `undefined.` Function declarations are scanned and are made available.
- `Call Stack` is also Known As **`Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack.`**

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
