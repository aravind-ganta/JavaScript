## async await

**Things learned:**

**`async await`** is used to handle promises. **`async`** is a keyword to create async function. **`async`** function always returns a promise.

**`await`** is a keyword which can only be used inside an **`async`** function and must be written in front of a promise, it resolves that promise.

Whenever **`await`** is encountered, the **`async`** function is suspended and is popped from call stack, and is pushed again after the promise is resolved.

**`Fetch`** returns a promise, whenever this promise is resolved it gives a response object which is a readable string.

While awaiting JS Engine does not actually wait rather the function is suspended and call stack is free for other stuffs, but it looks like program is waiting at that point.

Use **`try catch`** for Error handling and can also use **.Catch()** method.

```
This example will be helpful:
const p1= new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve("promise resolved");
    }, 15000);
});
 const p2= new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve("promise resolved");
    }, 30000);
});
async function display(){
    console.log("before p1" );
    const result= await p1;
    console.log("waiting for p1 to complete");
    console.log(result, "p1 completed");
    console.log("after p1");

    console.log("before p2" );
    const result2= await p2;
    console.log("waiting for p2 to complete");
    console.log(result2, "p2 completed");
    console.log("after p2");
}
display();
console.log("after display");
```

**Summary:**

**`async/await`** is a JavaScript feature that simplifies handling asynchronous code. Async functions always return a promise and await can be used inside async functions to pause execution until a promise is resolved. Async/await provides a cleaner syntax compared to traditional promise chaining.

**`Promise:`** Think of a promise as a guarantee made by someone (like a function) to do something and provide you with the result later. It's like ordering food at a restaurant. You get a promise (receipt) saying your order will be ready soon. You can wait for it (.then()) or check on it later (.catch()).

**`Async/Await:`** Async/await is like asking someone (a function) to do something for you, but instead of waiting for them to finish right there, you tell them you'll do something else while they work. It's like asking a friend to pick up your order from the restaurant. You can go do other things (like order a drink) while your friend (the async function) waits for the food (awaits the promise).

**Explanation:**

- Async functions and await keyword are used to handle promises efficiently. The await keyword can only be used inside an async function to resolve promises, simplifying asynchronous code execution.
- Async/await in JavaScript allows the program to wait for a promise to resolve before moving to the next line
- JavaScript is a synchronous single-threaded language where functions are executed line by line. Asynchronous functions like promises suspend execution, allowing other events to proceed, preventing freezing, or blocking of the main thread.
- JavaScript's call stack quickly executes functions, suspending execution for promises, ensuring smooth program flow.
- Using async/await in JavaScript is a syntactic sugar over promises, making code easier to read and understand.
- Async/await is a new way of handling promises in JavaScript. It is recommended to use async/await for handling promises for better code readability and debugging.
- You can use the Try{} and Catch{} method inside the Async/await for error handling.

**`Doubts:`**

**`For those who thinks if code reaches await of p1 suspends function execution and after 5 sec it should go to await p2 the timer for p2 should start and should take 10 sec there so overall function execution should be 15sec?`**

> The timer ticking doesn't start at await, instead it started in the beginning of the code only where promise was declared.
> If the declaration would have been like inside async p1 declare then p1 await after that p2 declared followed by p2 await then function would have taken 15 secs.

2. Async/ Await is just a syntactical sugar, but while the explanation was being done, we clearly saw that while using promises the console.log statements were being executed first whereas while in async/await usage they were working as though it was a normal synchronous flow.

```
async function a () {
    const v1 = await new Promise (function (res) {
        setTimeout(() => res(123), 10000)
    })
    console.log(v1)

    const v2 = await new Promise (function (res) {
        setTimeout(() => res(455), 10000)
    })
    console.log(v2)
}
a();
```

> it did this, 123 printed after 10 seconds, and after 10 seconds of 123-printing, 455 is printed.
> so, program completed in 20 seconds (10+10)
> in the video for 10+5 case, it got completed in 10 seconds, how??

```
const p1 = () => new Promise((resolve, rejects) => {
  setTimeout(() => {resolve('HELLO');}, 10000);
})
const p2 = () => new Promise((resolve, rejects) => {
  setTimeout(() => { resolve('HELLO');}, 10000);
});
async function getData() {
  const r1 = await p1();
  console.log(new Date());console.log(r1);
  const r2 = await p2();
  console.log(new Date());console.log(r2);
}
getData()
```

**`When I write p1 & p2 as function then it waits for another 10 secs for p2, while in case of const like shown in video it executes instantly. Can anybody explain the difference, i am bit confused.`**

> The reason is, when you write p1 and p2 as function, they get into the call stack only when they are called. But here in video, p1 and p2 are promises and not functions. So, they are added into call stack immediately when javascript encounters them.

---

## this keyword

1. **`this:`** It is a keyword refers to the object. which object is depending on how this keyword is invoked. **`this`** in global scope always points to the globalObject (In case of browser, it is the window object.)
2. **`this`** in a function depends on 2 things.

   - Inside function, value of `this` is `undefined (if strict mode)`, else it is the `window object (reason this substitution).`

   - how the function is being invoked (if we invoke the function using the global object in strict mode, then `this` will point to that globalObject).

3. **`this`** Inside object -> normal functions have `this` binding, and it will reference to the current object.
4. call, apply & bind are used to share a method with another object (hence the `this` keyword reference would also change accordingly)
5. `this` inside arrow function refers to the enclosing lexical context.
6. If nested functions: arrow function inside a normal function. In this case, `this` inside arrow function will get value from its immediate lexical context that will be current object.
7. Inside DOM, `this` references to the HTML Element.

**`Summary:`**

**`this`** keyword refers to different objects depending on how it is used.

1. In an object method: `this` refers to the object.
2. If `this` is alone then it is referring to the global object. (It depends on platform on which we are using this keyword like on browser-window and on Node.js - global)
3. If it is in function then it depends on strict mode, so if it in strict mode then `this` is undefined value.
4. If it is in function and in non-strict mode, then it is a global object.
5. If it is used in DOM, then it refers to the reference of HTML Element.
   Also call, apply, and bind methods refers `this` keyword. These are the methods are used for method sharing. 1.**`call()`** can be used to share method of another object and it will contains one argument which is nothing but the new object in which we don't have method and we have only variables/data. 2.**`apply()`** is similar to the `call()` but it can take array of arguments/elements.
6. **`bind()`** is used when we have to use this keyword after some time. e.g if we are sharing method using other methods then it will give us this value on which this keyword is refers to but if we want to use this keyword after some period of time then the this will be undefined cause it will lost the this value.
   > So avoid this issue, we can use `bind()` by which we can use this keyword and we can use it in method where we have use after some time and it will not lost. It will refers to the object.
