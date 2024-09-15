## Callback Hell

> **_`Time, tide, and JavaScript waits for none.`_**

JavaScript is a synchronous, single-threaded language with a single call stack, executing one task at a time. It does not wait for any task and executes the provided code quickly.

Callback functions enables us to do async programming in JS. We use this for some functions that are interdependent on each other for execution.

```
Example: Using setTimeout to delay execution.
setTimeout(() => {
  console.log('This runs after 5 seconds');
}, 5000);
```

**`E-commerce Example with Callbacks:`** Building a cart with items and handling order creation, payment, and other processes.

```
Example workflow:
Create an order using api.createOrder.
Proceed to payment using api.proceedToPayment.
Show order summary using api.showOrderSummary.
Update wallet using api.updateWallet.
Each step uses a callback to manage asynchronous operations.
```

1. **`Callback Hell:`** Asynchronous operations in JavaScript can be achieved through callbacks. Whenever there are multiple dependent Asynchronous operations, it will result in a lot of nested callbacks. This causes a pyramid of doom structure causing our code to grow horizontally, making it tough to manage our code.
   >

```
    Example of callback hell:
    api.createOrder(cart, () => {
      api.proceedToPayment(() => {
        api.showOrderSummary(() => {
          api.updateWallet();
        });
      });
    });
```

2. **`Inversion of control:`** This happens when the control of program is no longer in our hands. In nested functions, one API calls the callback function received but we don't know how the code is written inside that API and how will it affect our code. Will our function be called or not? What if called twice? What if it has bugs inside it? We have given control of our code to other code.

` Example: Passing a callback to api.createOrder and relying on it to call back.`

**Summary:**

1. Callback Hell: A situation where callbacks are nested within callbacks, making the code complex and hard to maintain.

2. Inversion of Control: Occurs when we pass control of our code to another function, potentially leading to issues like:

```
    Callback function not being called.
    Callback function being called multiple times.
    Trusting external APIs without knowing their internal implementation.
```

---

## Promises

A **`promise`** is an object that represents the eventual completion or failure of an asynchronous operation. Promises are like placeholders to store a future value that will be returned after some time. They contain two properties: **`PromiseState`** and **`PromiseResult`**.

It consists of 3 states: **`pending (the initial state), fulfilled (represents success) and rejected (represents failure)`** of an async operation.
The following reasons which make promises preferrable over callbacks are:

1. **`Prevents Inversion of Control:`** With promises we have the control of the code in our hand unlike callbacks where the code control was shifted to the function in which the callback is passed, making the execution unpredictable
2. **`Promises resolve ONLY once:`** This ensures that the callback attached to the **`then()`** function gets executed exactly once.
3. **`Guaranteed Response:`** Promises guarantees returning a response irrespective of the success or failure of the execution. This enables efficient error handling without sudden application crashes.
4. **`Promise Chaining:`** The efficient way of handling **`Callback Hell`**. It makes the code cleaner, readable, maintainable, developer friendly, and prevents horizontal growth of the code.

**Summary:**

**`Promise`** is an object that represents eventual completion or failure of an asynchronous event. Promises are a way of gracefully handling asynchronous operations in JavaScript.

Advantages of promise are:

1. Promise eliminates the problem of **`Inversion of Control`** as in case of call backs. It brings lot of trust in the transaction.
2. We can avoid **`callback hell`** by attaching callbacks to promise chains in vertical fashion. Chaining is done using **`.then()`**.
3. As soon as promise is fulfilled/rejected => It updates the empty object which is assigned undefined in pending state. A promise resolves only once, and it is immutable.
4. A very common mistake that developers do is not returning a value during chaining of promises. Always remember to **`return`** a value. This returned value will be used by the next **`.then()`**

**Note:**

In JavaScript, promises are used to handle asynchronous operations, such as network requests or database queries, in a more efficient and organized way. Here are some reasons why we use promises:

1. **`Handle asynchronous code`**: Promises help manage asynchronous code, making it easier to write and read.
2. **`Avoid callback hell`**: Promises eliminate the need for nested callbacks, making code more readable and maintainable.
3. **`Improve error handling`**: Promises provide a better way to handle errors, allowing you to catch and handle errors in a more centralized way.
4. **`Enable chaining`**: Promises enable chaining, allowing you to perform multiple asynchronous operations in a sequence.
5. **`Simplify code`**: Promises simplify code, making it easier to write and understand.
6. **`Improve readability`**: Promises improve code readability, making it easier to understand the flow of asynchronous operations.
7. **`Enable parallel operations`**: Promises enable parallel operations, allowing you to perform multiple asynchronous operations concurrently.
8. **`Provide a future value`**: Promises provide a future value, allowing you to work with data that may not be available yet.

> By using promises, you can write more efficient, readable, and maintainable code, making it easier to handle asynchronous operations in JavaScript.

---

## Creating a Promise, Chaining & Error Handling

1. Promise can be created using a new **`Promise()`** constructor function.
2. This constructor function takes a callback function as argument. The callback function has 2 arguments named **`resolve`** and **`reject`**. Resolve and reject are the keywords provided by JS.
3. We can only resolve or reject a promise. Nothing else can be done.
4. An error can also be created using **`new Error ('error message')`**.
5. There is also **`.catch()`** which is used to attach a failure callback function that handles any error that pops up during the execution of promise chain.
6. **`.catch`** only handles error of **`.then()`** that are present above it. If there is any **`.then()`** below it, catch will not handle any error for that, also that **`.then`** will get executed no matter what.
7. It can be useful in a way if we want to catch error for a particular portion of a chain.
8. We can have multiple catch based on requirement and then a general catch at the end.
9. Always remember to **`return`** a value in the promise chain for the next **`.then`** to use .
10. If it returns a value => It will be used as an argument in next function. If it is a promise then the next **`.then`** in the promise chain is attached to the promise returned by the current callback function.

**Note:**

A couple of things which could be added to the video.

1. **`Catch`** is not just for the method like createOrder rejecting things but any error which can occur within the then's callback as well.
2. **`then`** takes two callbacks for resolved and rejected case, even though that's not a pattern we Devs generally follow and because it's not handled it gets passed down to **`catch`** .

---

## Promise APIs + Interview Questions

1.  **`Promise.all`**

    1. `In case of success:`
       Wait for all to finish then so output.

    2. `In case of failure:`
       If anyone fail, then QUICKLY show error it's not wait for others to finish.

2.  **`Promise.allSettled (BEST AMONG ALL 4)`**

    1. `In case of success:`
       Wait for all to finish then so output.
    2. `In case of failure:`
       If anyone fail, then still wait others to finish then return result.

       `[val1, err2, val3]`

3.  **`Promise.race`**

    1. `First settled` (whether it's success or failure)
       return result of first settled promise.

4.  **`Promise.any`**

    1. `return first settled RESOLVED (success).`
       If fail then still wait for other.

    2. In case of all promise reject then return AGGREGRATE ERROR with value.

    `[err1, err2, err3]`

**`Summary:`**

1. The different Promise APIs are **`promise.all, promise.allSettled, promise.race, and promise.any.`** These APIs are crucial for handling parallel API calls.
2. **`Promise.all`** waits for all promises to succeed. If any promise is rejected, **`Promise.all`** will immediately throw an error, making it an all-or-nothing approach.
3. **`Promise.allSettled`** waits for all promises to settle, regardless of success or failure and returns the array of objects.
4. **`Promise.race`** returns the result of the first settled promise.
5. **`Promise.any`** (any one success is fine) doesn't care about rejection, if anyone is resolve then returns the value of that promise, if all are rejected then it returns the **`Aggregrate Error: All are rejected`** (for getting all the values console.log(error.errors))
