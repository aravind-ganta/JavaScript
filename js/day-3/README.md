## The Scope Chain, Scope & Lexical Environment

1. **`Scope`** is where we can access any specific variable or function in our code. If there is some **`var b`**, where can I access the **`var b`** that is the scope of **`var b`**. Scope of a variable is directly dependent on the lexical environment.
2. Whenever an execution context is created, a lexical environment is created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence.
3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
4. The JS engine first searches for a variable in the current local memory space, if it not found here it searches for the variable in the lexical environment of its parent, and if it still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
5. The mechanism of searching variables in the subsequent lexical environments is known as **`Scope Chain.`** If a variable is not found anywhere, then we say that the variable is not present in the scope chain.
6. The inner functions can access variable of outer functions up to global execution context (hierarchical parent Lexical Environment). but the outer functions or global execution context can't access variables of insides functions.

**Summary:**

> Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory. Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked. Global execution context holds reference to null. JavaScript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed. This mechanism is called SCOPE CHAIN. If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the browser’s console.

**Note:**

**`Lexical environment:`** The Local memory (Created and goes together with 1st phase of corresponding execution context) along with Lexical environment with the parent! and every time the lexical environment of the corresponding context is used, it references to its parent Lexical environment.

> for simple understanding, I will try it as `'an onion example'`, see when one layer of onion(a variable) covers the layer inside it, it also covers the inner layers inside that layer and a point on our first layer of onion encloses inner layers our inner layer(variable and function inside the layer) gets covered by our first layer(can access the variable on the context) and the second layer(under first layer) encloses the third layer(innermost layer)still covered by 1st layer(can access the variable on layer)

> scope chain is somewhat like DFS algorithm the difference is in SCOPE chain, it is going to find the variable till it reaches the last parent lexical environment (if found in some parent's lexical then return from there) and in DFS it deep down from branch to branch (till child) until the element is found.

**`Just a note regarding scope chain for let and const:`**
If let variable is declared normally without a block suppose inside a function, they will get lexically inherited to lower nested scopes, but if they are declared in a block, they are not available within the same function outside that block of-course but are not even inherited lexically in nested scopes. This means that the block memory scope is not part of the lexical scope chain.


---


## let & const, Temporal Dead Zone

1. **`let`** and **`const`** declarations are hoisted, but they are hoisted very differently from the **`var`** declarations.
2. Memory is assigned to **`var`** declarations, and **`var`** declarations are always attached to the global object **`window`**. In case of **`let`** and **`const`**, they are allocated memory in some different memory space other than global space known as **`Script`**, and this is what we call hoisting. The **`let`** and **`const`** declarations are not attached to the global object **`window`**. And this is the reason you cannot access these **`let`** and **`const`** variables before you have put some value in them.
3. **`Temporal Dead Zone`** is the time between **`let`** & **`const`** variables were hoisted (set as **`undefined`**) and till it is initialized with some value. Whenever you try to access a **`let`** or **`const`** variable in the temporal dead zone, then it will always give you reference error.
4. **`var`** declarations are always attached to the **`window`** object, provided they've been declared in the global scope. **`let`** and **`const`** declarations are never attached to the **`window`** object, as these variables are never stored in the global memory space.
5. **`let`** and **`const`** are stricter than **`var`**. Re-declaration of **`let`** is not allowed in JS. The JS engine will give a syntax error, it is not allowed in the same scope. 6.**`const`** behaves like **`let`** regarding the hosting and temporal dead zone but it is even more strict and requires a value at the time of declaration and its value cannot change later in the program.
6. **`How to avoid temporal dead zone?`**

> Sometimes the temporal dead zone can mess our code as a developer. The best way to avoid the temporal dead zone is to always put your declarations and initializations on the top of the code. So, that as soon as your code starts running, it hits the initialization part at the first, and then you go into the logic, and then you do something with these variables. Otherwise, you'll run into unexpected errors in your code.

> This way we're shrinking the temporal dead zone nearly to zero. We've minimized the TDZ nearly to zero, while moving all the initializations at the top, so that nothing happens before these initializations.

**Note:**

**`Variable declaration:`**

**`var ->`** Associated with Global object (can be accessed window/this object), can be re-declared & re-initialized.

**`let ->`** Associated with TDZ, can't be re-declared & can be re-initialized.

**`const ->`** Associated with TDZ, can’t be re-declared & re-initialized.

**`Why this.a or window.a returned undefined but doing console.log(a) (without this or window reference) throwed ReferenceError`**

> that happened because of references itself. The engine is telling us that we are trying to access a **`property`** of this or window object which is not there, hence undefined. But the latter is not accessed using any object hence a proper referenceError comes up. Easiest way to remember is, non-existent property access which does not have a parent object will throw an error otherwise undefined.

> **`Temporal dead zone is like a coma state, it’s there but you cannot talk to him, till the time he/she has been given value of life.`**

**Types of error:**

**`Type error:`** when we change type that is not supposed to be changed is called type error. we should have initialized and declare together to resolve the type error.

```
EX-: const a = 100;
a = 1000;
```

**`Syntax error:`** when proper syntax (way of writing a statement) is not used means if we declare a variable but don't initialize with a value Or if we declare the duplicate value then it is called syntax error.

```
EX1:- const a;          //without initialize a value
EX2:- const a = 1000;
      const a = 500;  	//duplicate declaration
```

**`Reference error:`** where variable does not have memory allocation means if we print the value before initialization and the value is in the temporal dead zone Or if we print a different value which is not initialize in program then it gives us reference error.

```
EX1:- console.log(a);     	//value is in the temporal dead zone
      let a = 2500;
EX2:- console.log(c);     	//c is not defined
      let a = 2500;
      let b = 1500;
```

> Reference error occurs for a variable which is either not declared in the program or for a variable which is in temporal dead zone. Reference & Type errors are like Run time errors. Syntax error is like Compile time error.

**Summary:**

Always keep your variable declaration on top! on top!

**`is let and const functions are hoisted? > Yes (but in temporal dead-zone)`**

```
sample program:
console.log(b);
let a= 10;
var b= 100;
```

> We made var declaration to 'b' and let to 'a' and here comes the difference: the var declaration will come under global declaration and let declaration in script (separate memory space) and these variables are not accessible unless they are assigned with certain values.

> So, the temporal dead zone is the time between saving variables in memory-space and value assigned to it by engine itself. In this time frame you can't access the variable, by hoisting, Engine stores the Variable in `Variable environment(Memory component)` and until the line where the actual variable is assigned to its value (until then variable, remains in temporal dead zone)

`ReferenceError` cannot access <variable> before initialization: avoided the concept of temporal Dead zone, bound you will get this error!

**`Q) How it differs from "Uncaught ReferanceError: X is not defined at <yourscript>.js”?`**

> so it comes to a question "is variable X is in Variable environment?"

```
if(true)
{
      console.log ("cannot access <variable> before initialization");
      console.log ("This is temporal dead zone case");
}

if(false)
{
      console.log ("Uncaught ReferanceError : X is not defined at<yourscript>.js");
      console.log ("Variable is simply not available");
};
```

**`Q) what about variable declared by 'var'?`**

> they will be assigned 'undefined' until a value is assigned.

**`Declaration Type:`**

1. var = saved in Global execution context, can be assigned later, and modified in script.
2. let = saved in script execution context, temporal dead zone affects it and can later modified in script.
3. const= saved in script execution context, temporal dead zone affects it and must be defined (assign values) when defining variable by it (cannot remained as 'undefined').


---


## BLOCK SCOPE & Shadowing in JS

1. **`Block: { }`**, this is a perfect example of a block. Block is also known as **`Compound Statement.`** Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
2. Block values are stored inside separate memory than global. Let and const are block scope means, they are stored in separate memory space which is reserved for this block.
3. Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope, effectively hiding the outer variable within that scope.
4. The shadow should not cross the scope of original otherwise it will give error. shadowing let with var is **`illegal shadowing`** and gives error. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.
5. In function scope it is also shadow similar way. Arrow function scope is same as function scope. Illegal shadowing happens when a let or const is shadowed using var in block scope. But in function scope this is allowed.

> variables declared with var are function-scoped or globally scoped, but they are not block-scoped like variables declared with let or const. So, the var a declared inside the block {} will override the outer var a declaration, and the value of a will be 10 when logged outside the block. 6. **`Illegal shadowing:`**

- shadowing var with var works because subsequent VAR declarations are ignored and treated as assignment statements.
- shadowing var with let works because let is block scoped and var is function or global scope depending on where var is declared.
- shadowing let with var doesn’t work as var are hoisted even if they are inside block, so while hoisting they are in global or function scope thus crossing the boundary of block.

**`Summary:`**

1. What is block in JavaScript?
   > multiple js statements formed in a group enclosed in brackets and it forms a block.
2. What is need of a block/Grouping?
   > JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block.
3.

```
Eg: {
           	var a = 10;
           	let b = 20;
           	const c = 30;
        	}
```

> 'a' is hoisted in the global memory space, whereas let and const i.e., 'b' and 'c' are hoisted in some other memory space which is known as "Block". And that's why we say let and const are block scoped. When JS engine finishes executing this block, 'b' and 'c' will be no longer accessible outside this block. But you can access 'a' outside of this block, because 'a' is globally scoped. 4.

```
Eg:
          	var a = 100;
          	{
             	var a = 10;
             	console.log(a);
            	}
Output : 10
```

> Here, local variable 'a' shadows the global one in that block, that's why the value of 'a' in the block is 10 and not 100. Moreover, the value of 'a' is altogether changed to 10, and that's why if you'll try logging 'a' outside this block, you'll get its value as 10. This happened because both the 'a' are pointing towards the same memory location, which is there in the global scope.
> But, this is not in the case of let and const declarations, local let declaration cannot shadow the global let declaration, in a block.

```
Eg: let a =1;
    	{
      	let a = 10;
      	}
```

> The local 'a' here cannot shadow the global 'a' here, because the scopes in which these 'a' are falling are different, and hence the memory locations of both these variables will be different, local 'a' is stored in Block while global 'a' is stored in global memory space. Hence, the manipulation in one cannot affect the other. Similar type of behavior is also expected in case of const declarations. Shadowing works the same way in case of functions as well, since we can assume functions as a block only.

5. Illegal Shadowing:

```
Eg:  let a = 10;
     	{
       	var a = 20;
      	}
```

> This is an example of illegal shadowing; you cannot shadow a let variable using a var declaration in a block. You can shadow a let declaration using a let, but not var. Because, in the same scope, let cannot be re-declared.
> But we can shadow like this:

```
let a = 10;
{
 let a = 20;
}
```

> Because here 'a' has different scopes, one is block and one is global scope, so re-declaration can be done here. 6. Lexical block scope with code example:

```
Eg:     let a = 10;
       	{
         	{
            	console.log(a);
         	}
       	}
```

> In the above example, the variable 'a' is declared in the global scope, but this 'a' can be accessed inside any block or any inner block. Firstly, the JS engine tries searching for 'a' in the current block it is executing, if it does not find there, it searches 'a' in the immediate ancestral lexical environment, and if still does not find there too, it expands it search to higher ancestral lexical scopes, it finds 'a' in the global scope, took its value, and printed on the console.

**Note:**

**`Block:`** It is used to combine multiple statement into one statement so that we can use it at those places where JS expects to have single statement.

**`Scope:`** scope of a variable or a function is the place where these are accessible.

**`Block scope:`** The variables and function present within the scope of a block section. And block follows the lexical scope chain pattern while accessing the variable.

**`Shadowing:`** Providing same name to the variables as of those variables which are present in outer scope.
