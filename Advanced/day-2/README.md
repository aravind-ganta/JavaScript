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
