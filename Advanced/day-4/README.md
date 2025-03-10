## Closures in JS

**`Closure:`** Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if it’s vanished in execution context but still it remembers the reference it was pointing to. It’s not just that function alone it returns but the entire closure and that's where it becomes interesting!!

**`Things learned:`**

1. Function bundled with lexical scope is called **`closure.`**
2. Even if we return the function, it still remembers its original lexical environment and local storage so it can access values.
3. If we write return `function x () {....}` --- this automatically returns the value.
4. The function that is returned is reference so any change in value of that variable inside function will be reflected as such.

**Note:**

**`Q) What is closure?`**

> The function bundled with its lexical environment closed to that function and closures have very special place in runtime environment.

> The fun in JavaScript is you can assign a variable for a function, and you can pass function as a parameter even you can return the function in JavaScript!!

**`Q) What does the closure do in my JavaScript programs?`**

> Whenever I call a function in JavaScript the closure maintains its values (lexical env.) and function in its own runtime and when that specific function executed, it returns with own environment even the variable vanished after its execution.

> In closures, values in variable are 'pass by reference' hence their values can be changed, and whenever comes the closure inside closure (multilevel one) we can see the function refers the 'parent' variable.

---

## setTimeout + Closures Interview Question

**`Things learned:`**

1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.
3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure.

**`Var:`**

> Function scoped [only one shared binding for all your loop iterations- value of i will be 6]

```
Example:
function closures() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(x);
    }, i * 1000);
  }
  console.log("hi");
}
closures();
```

**`let:`**

> Block scope [i get a new binding for each iteration]

> Apart from creating a function inside the for loop and calling it explicitly or using IIFE (Immediately Invoked Function Executions), we can also use another way to make the example code work by passing the for-loop variable to a let variable and creating a block scope for that variable.

```
Example:
function closures() {
  for (var i = 1; i <= 5; i++) {
    let x = i;
    setTimeout(() => {
      console.log(x);
    }, i * 1000);
  }
  console.log("hi");
}
closures();
```

**Note:**

One more way to solve that problem:

```
function x(i) {
  var a = i;
  setTimeout(() => {
    console.log(a);
  }, a * 1000);
}
for (var i = 1; i <= 5; i++) {
  x(i);
}
```

---

## CRAZY JS INTERVIEW ft. Closures

**`Things learned:`**

1. An inner function can be directly called using two parenthesis ()().
2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.

**`Closure:`** function bundled with its parent lexical environment along with its local environment, which allows the access to variables from the parent.
Due to this behaviour, it is possible to perform the respective operation on the data without directly providing access to the data.

Hence the advantage of data hiding by encapsulation can be done using the closures.

Here the example of increasing the count without accessing the count of the outer function is due to the inner function being lexically inside the outer function.

**`Summary:`**

Closure in simple terms:

1. For caching functions (memorization).
2. Reusable states
3. Data encapsulation

Disadvantages if asked:

1. Holds space in memory unless not set null
2. not garbage collected if active
