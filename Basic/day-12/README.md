## Asynchronous Javascript
### Intervals and Timers
* **setInterval():** It allows you to execute a chunk of code every time a specified amount of milliseconds passes
* **setTimeout():** It allows you to wait a certain amount of time before executing a chunk of code, do note other code outside of the timeout will continue execution as normal

### Asynchronous JS
* The main concept behind Asynchronous JS is that we don't wait for a function to get executed and complete its task and then handle the result
* But, we simply let the asynchronous function do its job in the background and we move on to execute the other lines of code and then use the result of the async task when it is available

### Callback Hell
*  Every function gets an argument which is another function that is called with a parameter that is response from the previous one.
* It's difficult to manage a lot of callback functions
* This pattern of coding at large scale is not maintainable and is confusing and also violates the DRY principle.

### Promises
* These are objects that either return the successfully fetched data, or the error

### Async/Await
* Asynchronous functions look and behave more like synchronous functions
* The await waits for the promise to return a result
> **Note:** The await keyword can only be used inside of an async function