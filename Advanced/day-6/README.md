## Asynchronous JavaScript & EVENT LOOP from scratch

**`Things learned:`**

1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's.

   **`WebAPIs:`**

   - setTimeout
   - DOM APIs
   - console
   - fetch ()
   - local Storage
   - location

2. Callback functions and event handlers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. **`Event loops`** - continuously watches Call Stack and Callback Queue till the queue and stack are empty. Why we need **`Callback Queue`** - when user clicks continuously so it needs to be queued somewhere.
5. **`Micro task queue`** - Higher priority of execution for call stack over callback tasks. - fetch () APIs - promises, network calls - mutation observers
6. **`Starvation`** - when micro task queue is again and again generating micro tasks because of which call back queue tasks are not getting chance to get executed.
   > In JavaScript, the event loop, microtask queue, callback queue, and call stack are all key components that help manage the asynchronous nature of the language.

**Summary:**

**`Call Stack:`**

The call stack is a data structure that keeps track of the function calls in your code. It follows the Last In, First Out (LIFO) principle, meaning the last function that gets pushed onto the stack is the first one to be popped off when the function completes.

**`Callback Queue (Task Queue):`**

The callback queue, also known as the task queue, holds tasks (callbacks or events) that are ready to be executed. These tasks usually come from asynchronous operations, such as DOM events, HTTP requests, or timers.

**`Event Loop:`**

The event loop is responsible for continuously checking the call stack and the callback queue. If the call stack is empty, the event loop takes the first task from the callback queue and pushes it onto the call stack for execution.

**`Microtask Queue:`**

The microtask queue holds tasks that are also ready to be executed but has a higher priority than the callback queue. Microtasks are usually scheduled by JavaScript promises, mutation observers, and other similar mechanisms.

**`Here's how they work together:`**
When an asynchronous operation is encountered, such as a setTimeout or a Promise, the callback associated with that operation is sent to the callback queue after the specified time or when the Promise settles.

When the call stack is empty (no functions being executed), the event loop takes the first task from the microtask queue and pushes it onto the call stack.
If the microtask queue is empty, the event loop looks at the callback queue and pushes the first task onto the call stack. This process repeats, allowing JavaScript to handle asynchronous operations without blocking the main thread.
Understanding these concepts is crucial for writing efficient and responsive asynchronous JavaScript code, as it helps you manage the order of execution and prevent blocking the user interface.

---

## JS Engine EXPOSED, Google's V8 Architecture

**`Things learned:`**

1. Every browser contains the JS runtime environment, and it contains all the elements to run JS code.
2. It contains JS engine, set of APIs, callback queue, microtask queue, event loop etc,.
3. JS engine is not a machine. It is a myth. JS engine is a piece of code.
4. Whenever we write the code, the JS Engine receives the code as input, and it goes the below three stages include Parsing ---> Compilation -----> Execution.
5. Parsing: In this stage the JS code is broken into tokens. There is a syntax parser which takes the code and converts into AST (Abstract Syntax Tree).
6. Compilation: The AST is converted into byte code with the help of JIT Compilation (Just in Time) and here both Interpreter and Compilation is used. It interprets while it optimises code as much as it can. Now the Byte code is goes to Memory heap and as well as call back for execution.
7. Execution and Compilation are done together. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.
   The fastest JS Engine is `Google's V8` Engine in which Google used Ignition as Interpreter and Turbofan as optimising compiler which helps in make code run very fast.

**Note:**

**`Basic idea about Mark & Sweep Algo:`**

It comprises of 2 phases -

1. Mark phase
2. Sweep phase

All objects are marked as 0 initially (at creation) and in mark phase the objects that will be accessible are marked as 1 (reachable) by a DFS graph traversal.

During sweep phase, the objects marked with 0 are removed from heap memory. and also, all reachable objects are again initialized with 0 (made unreachable) because the algorithm will run again.

So, it's basically tracing garbage collector concept. :)

**`One small thing/correction to add:`**

MicroTask Queue is a part of the Engine and some engines like Chakra don't even have it, MicroTask queue is V8 engine specific "term".
For other engines it’s called PromiseJobs (ECMA spec), implementation of it is very Engine dependent.

That means even in the absence of an EventLoop(platform), you can ask the engine to process your promise callbacks, i.e. there is no need of an event loop to execute a promise.

**`Source:`** Worked with V8 and event loops.

**`Link:`** [v8 documentation](https://v8docs.nodesource.com/node-12.0/db/d08/classv8_1_1_microtask_queue.html)

---

## TRUST ISSUES with setTimeout()

**`Things learned:`**

1. The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms.
2. setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.

**`Note:`**

setTimeout guarantees to push the callback function to the callback queue but not to the call stack and immediately execute it.

**`Blocking thread in a simple way we can do something like:`**

```
let endDate = new Date().getTime() + 6000;
while (new Date().getTime() < endDate) { }
```

**`So, I used setTimeout(fn, 0) last month in the project I'm working in. Why did I use that?`**

> [Disclaimer: If you don't understand React, then everything I rant about below, will be a bouncer]

So, there was this component (say X) which was used at 2 places. The click registered on X was sending some props to another component (say Y) which was a Modal and in the Y component, there was another instance of the X component to which, the Y component was supposed to send props that came from the X component outside, to the X component inside the Y component. And so, it did send that prop.

But by the time we clicked on the outside X component, and the Y component (Modal) opened and showed the X component again, we could see a slight delay, which was showing the changes taking place from the previously clicked value and the current value received through props.

So, to get rid of that behaviour, what we can do is, we can use a central store like Redux, or something like Context. But in a company, when the release cycle is near, we generally don't want to make a lot of changes to the existing code.

So, what did we do? We used the classic: setTimeout(fn, 0);
It did exactly what we wanted. It deferred the loading of the component Y just enough till the prop from the X component to Y component reached the X component again. And voila! we saw no delay whatsoever. But this was just a temporary fix. In the next release cycle, we'll most probably tackle this issue using some Promise Based Solution or using the Context API.

**`Doubts:`**

**`when callback function gets in the callback queue?`**

```
e.g we have 3 call back functions with different timers like
console.log("Start");
setTimeout(function a() {
  console.log("First Queue");
}, 5001);
setTimeout(function b() {
  console.log("Second Queue");
}, 5002);
setTimeout(function c() {
  console.log("Third Queue");
}, 5000);
console.log("End");
```

> **in this, if a() goes first then it should be printed first from the queue. but the question in this program which callback method goes to the callback queue first. (when, where, and why) please answer this.**

As javascript is synchronous single threaded language so the function a() will run first and it will be saved in the web api's environment same will happen with b() and c(). All these callback functions will run simultaneously in the web api's environment. So, when all 3 callback functions are running simultaneously the callback function with less waiting time will be added to callback queue first as i can see function c() has less setTimeout i.e. 5000 so it will be added first then function a() then at last b() will be added to the queue.

So, as we know with the help of event loop the functions in the callback queue will be send to call stack. when the call stack will be empty (Global Execution completed) it will execute these functions.

**`Output of above will be:`**

```
      Start
      End
      Third Queue
      First Queue
      Second Queue
```
