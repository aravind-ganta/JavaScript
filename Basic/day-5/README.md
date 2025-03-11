## Scope
* Scope simply allows us to know where we have access to our variables. It shows us the accessability of variable, functions and objects in some particular part of the code.
* Firstly, it provides us with some level of security to our code. Secondly, it helps to improve efficiency, track bugs, and reduce them. It also solves the problem of naming variables
* variables defined inside a function are in local scope while variables defined outside of a function are in the global scope. Each function when invoked creates a new scope.
### Global Scope
* Variables written inside the Global scope can be accessed by and altered in any other scope
#### Adavantages
* You can access the global variable from all the functions or modules in a program
* It is ideally used for storing 'constants' as it helps you keep the consistemcy
* A Global variable is useful when multiple functions are accessing the same data
#### Disadvantages
* Too many variables declared aas global, then they remain in the memory till program execution is completed. This can cause of Out of Memory issue
* Data can be modified by any function. Any statement written in the program can change the value of the global variable. This may give unpredictable results in multi-tasking environments
* If global variables are disconnected due to code refactoring, you will need to change all the modules where they are called
### Local Scope
* variables defined inside a function are in the local scope
#### Adavantages
* The use of local variables offer a guarantee that the values of variables will remain intact while the task is running
* They are deleted as soon as any function is over and release the memory space which it occupies
* You can give local variables the same name in different functions because they are only recognized by the function they are declared in
#### Disadvantages
* They have a very limited scope
### Block Scope
* Block statements like if or for and while loops, unlike functions, dont create a new scope
* Variables defined with const or let have something called Block scope (can't access outside the block)
### Local vs Global
* Local variable is declared inside a function whereas Global variable is declared outside the function
* Local variables are stored on the stack whereas the Global variables are stored on a fixed location decided by the compiler
* Local variable doesn't provide data sharing whereas Global variable provides data sharing
* Local variables are created when the function has started execution and is lost when the function terminates, on the other hand, Global variable is created as execution starts and is lost when the program ends
* Parameters passing is required for local variables whereas it is not required for a global variable
## Hoisting
* Hoisting is a JS mechanism where variables and function declarations are moved to the top of their scope before code execution
* JavaScript only hoists declarations, not initializations. If a variable is declared & initialized after using it, the value will be undefined
* To avoid this pitfall, we would make sure to declare and initialise the variable before we use it
## Closures
* Closure gives you access to an outer function's scope from an inner function.