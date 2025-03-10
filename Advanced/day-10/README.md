## call, apply and bind method.

All these methods are used for method/function borrowing or sharing.

- **`call`** method is used to call the function with the given this value and arguments can be passed individually.
  > `printFullName.call(student, "Jammu", "J&K");`
- **`apply`** method is similar to call, the only difference is that instead of passing the arguments indvidually we pass the arguments in a list/array.
  > `printFullName.apply(student, ["Jammu", "J&K"]);`
- **`bind`** method is also used to override the this value but unlike call and apply it does not invoke the function instantly but returns a function with attached this and arguments which can be called later.
  > ```
  > const printStudent = printFullName.bind(student, "Udhampur", "J&K");
  > printStudent();
  > ```

In simple words, bind() is used where we are trying to get this value after some period of time means we are using SetTimeOut inside method.

**`Difference between call, apply, bind:`**

All these are JS functions which are used to resuse functions by manipulating this value, inside that function.

**`call`** - This function when called attached with the main function which then takes the argument as the callback function, then the callback functions body / data is replaced with the "this" keyword inside the parent function, on which call is attached.

> ```
> Ex: fun(args){this};
> fun.call(data, args);
> ```

**`apply`** - It is exactly the same of call. The only difference is that it takes arguments as array or array of objects.

> ```
> Ex: fun(args1, args2){this};
> fun.apply(data, [ args1, args2]);
> ```

**`bind`** - It is used to create a separate function replacing this of the called function with the data of the callback function, passed inside it. Further that created function can take arguments simply and the desired result can be seen.

> ```
> Ex: fun(args1, args2){this};
> const newfun = fun.bind(data);
> newfun(args1, args2);
> ```

---

## Prototype and Prototypal Inheritance

**`1.	What is Inheritance of an Object in Javascript?`**

When a new object is trying to access properties and methods of another old object, because this new object might be created from the old objects reference.

```
Example :
object1 = { city:'mumbai' };
object2 = Object.create(object1);
object2.name = 'Shiv';
console.log(object2.name + 'is from' + object2.city); // here when one couldn't find city property inside object2, it goes to find this property in the inherited object1.
```

This is called inheritance of an object in javscript. This type of inheritance is different from the classical inheitance of oops. This type of inheritance is provided by Prototype Inheritance.

**`2.	What is prototype in javascript?`**

> **_`Almost everything in javascript is an object.`_**

**`Prototype`** is nothing but an object which consists of built-in properties and methods.

In JavaScript, there are different types of prototypes depending on how the object is created:

**`Object Literals and new Object():`** The prototype of objects created with {} syntax or new Object() is `Object.prototype.`

**`Array Literals and new Array():`** The prototype of arrays created with [] syntax or new Array() is `Array.prototype.`

**`Date and RegExp:`** The prototype of objects created with new Date() and new RegExp() are `Date.prototype` and `RegExp.prototype` respectively.

In JavaScript, every function has a prototype property that refers to an object known as `Function.prototype`

Whenever we create object/ function/ methods/ array/ variable, these all are attached with some hidden properties, which we call **`prototype.`**

**`if you want to know what hidden properties and methods are stored in a prototype object?`**

> ```
> Array.prototype
> Function.prototype
> Object.prototype
> ```

**`what if I want to know the hidden properties of a object declared in the code?`**

proto is reference to prototype (or it points towards prototype), if we want to access prototype, we do proto

> ```
> example:
> let a = {};
> a.__proto__;
> ```

**`What is difference between [[Prototype]] and _proto_ and prototype?`**

> Ans: All are objects.

1. **`[[Prototype]]`** is a hidden private property that all objects have in Javascript, it holds a reference to the object’s prototype ([[Prototype]] : Object.prototype).

An object’s prototype is the object that an object inherits or descends from.

> Means that if an object2 is inherting properties from another object1, then inside the object2's prototype we'll find the methods and properties of object1.

```
so lets say we have two objects --> object1 and object2.
null-->Object.prototype
Object.prototype-->object1
object1-->object2
null-->Object.prototype-->object1-->object2
```

since all objects in javascript point to the default Object.prototype, the Object.prototype points to null. To verify if its point to null or not see inside Object.prototype._proto_ === null

2. **`_proto_`** (also called the Dunder Proto or Double Underscore Prototype) is a property of Object.prototype that exposes the hidden [[Prototype]] property of an object and allows you to access or modify it. You should not use it as it is deprecated, although you may come across it in older code.

> The modern way of accessing an object’s prototype is by using Object getPrototypeOf(obj). You can also modify an object’s prototype using Object.setPrototypeOf(obj, prototype) as you can see in the following.

3. **`.prototype`** is a special property that almost all functions have that is only used when a function is invoked as a constructor function. I say almost all because arrow functions and methods defined using the concise syntax do not have `.prototype` properties and cannot be used as constructors.

> The `.prototype` property contains a reference to an object and when a constructor is used to instantiate or create a new object, `.prototype` is set as the prototype of the new object.

**`CONCLUSION:`**

**`.prototype`** is a special property that all functions have that contains a reference to an object.

When a constructor is used to instantiate a new object, ConstructorName.prototype is set as the prototype of the new object.
All instances of that constructor (the objects it creates) can access the properties of ConstructorName.prototype.

**`Q1 > What will happen if we use x._proto_ and x.prototype, here x is an object declared using object literals?`**

**`x._proto_`** // this gives an object which containes hidden methods and properties defined for the prototype of varibale x, here variable x is an object, so it inherits the properties and methods of Object prototype.

**`x.prototype`** // since x is an object decalred using an object literals, this gives a undefined.

**`Q2 > What will happen if we use myfunc._proto_ and myfunc.prototype, myfunc is a construction function?`**

**`myfunc._proto_`** // this gives an object which containes two things --> custom made hidden methods and properties defined by the user + default hidden methods and properties of Function prototype; here myfunc is a function, so it inherits the properties and methods of Function prototype.

**`myfunc.prototype`** // this gives the default hidden methods and properties of Function prototype; here myfunc is a function, so it inherits the properties and methods of Function prototype.

**`Q3> What will happen if we use y._proto_ and y.prototype, y is a object declared using new keyord on construction function myfunc?`**

let y = new myfunc();

**`y._proto_`** // this gives a refernce to the object which containes hidden methods and properties of the function myfunc, since y is an object which inherits from the myfunc.prototype, also it inherits the properties and methods of Object prototype.

**`y.prototype`** // since y is an object, this gives a undefined.

**`What is prototype chain and prototype inheritence in javascript?`**

> So basically, a datatype/dataStructure in javascript has a prototype which refernces/points to an object(prototype), and this object(prototype) references/points again to another object(prototype), at some point this referencing ends and the object finally points to null. So, when does it end? It ends when the last reference is to the Object.prototype, and this object.prototype points to null.

> So every prototype in javscript eventually points finally to the Object.prototype , This is called Prototype chaining, and using this chaining method we can create a custom prototype inheritance between functions.

**`Summary:`**

**`inheritance in JS`** => When an object trying to access variables and properties of another object

**`prototype`** is an Object that get attach to function/method/object and this object has some hidden properties.

Whenever we create object/ function/ methods/ array/ variable, these all are attached with some hidden properties, which we call prototype.

**` _proto_`** is reference to prototype (or it points towards prototype), if we want to access prototype, we do _proto_

prototype object has a prototype of its own, and so on until an object is reached with null as its prototype, this is called **prototype chaining.**
This `_proto_` is used here for demo purpose, but its deprecated. We should only use `Object.getPrototypeOf()`

**`Q.  What is Prototype?`**

A. By prototype we can get some hidden property or method. If we are creating some Array, function, Object.

```
For Ex:  let obj2 = {
                            name: "Aman",
                            age: 21
                    }
```

In this if we are going to obj2 methods in console so we can get different methods becz of prototype.

**`Q.  What is Prototypal Inheritance?`**

A. Prototypal inheritance is that you can add new properties to prototypes after they are created.

```
      For Ex:  let obj1 = {
                        name: "Aman",
                        city: "Pune"
                     };

                     let obj2 = {
                        name: "Alex",
                    };
                    obj2_proto_ = obj1;
                    console.log(obj2.name+" "+obj2.city); // Alex Pune
```

**`Doubts:`**

**`Why performance issues? Here what I found by doing a research.`**

1. By directly modifying the _proto_ we increase the time for prototype lookups, which means it again goes for another _proto_ chain
2. Also JS engines like v8 optimized to lookup for a stable prototype chain so by modifying the _proto_ chain we are de-optimizing it

**`I have a doubt. When we make use of call, apply or bind method, does prototypal chaining take place under the hood?`**

> Yes, it does. How?
> Everything in JavaScript is an Object.
> First of all when we create the function - function is inherited from function constructor, try this `function.__proto__` it gives you Function constructor when you do Function.prototype it gives you the Object constructor which is the base of prototype inheritance. When you call it and inherit it does the same prototyping process.

---

## Polyfill for bind method

1. The **`bind()`** method creates a new function, when invoked, has the this sets to a provided value.
2. The **`bind()`** method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.

if we add obj.call(...args) only then we don't need to do any other thing like param and apply.

```
Function.prototype.mybind = function(...args) {
    let obj = this;
    return function (...args2){
        obj.call(...args, args2);
    }
}

let printName2 = fullName.mybind(name, 'Dehradun')
printName2('Uttarakhand');
```

> Instead of using `slice` I have used `rest operator` to extract the rest of the value from the args.

```
let name = {
    firstname: 'John',
    lastname: 'Doe',
}
let printFullName = function (hometown, state, country) {
    console.log(this.firstname + ' ' + this.lastname + hometown + ' ' + state + ' ' + country)
}
Function.prototype.myBind = function (...args) {
    // `this` -> printFullName
    let obj = this;
    const [a, ...b] = args; //rest operator
    //console.log(a, b)
    return function (...args2) {
        //console.log(args2)
        obj.apply(a, [...b, ...args2])
    }
}
let printMyName2 = printFullName.myBind(name, "Kolkata", "West Bengal");
printMyName2("India");
```

**`Short solution:`**

"this" inside the arrow function refers to the function on which mybind function is called.

```
Function.prototype.mybind = function (...args) {
  return (...args2) => this.call(...args, ...args2);
};
```

---

## Currying

**`Function currying:`** Currying is a transformation of a function with multiple arguments into a sequence of nested functions with a single argument.

1. **`Bind method:`** Take a function, modify it by attaching bind to define a parameter (or method)

2. **`Closure method:`** Take a function, define parameter in closure style, define another parameter by just defining it while using as curried version.

> {In python for achieving similar functionality Somewhat similar method is used, called as "Decorators"}

**`Summary:`**

- Function currying can be achieved in JavaScript using bind method and closures. The bind method is used to create a copy of a function with preset arguments. The copied function can be invoked later with the remaining arguments.
- The bind method sets the preset arguments as the initial values of the copied function's parameters. By passing an argument to the curried function, it behaves as if the argument was the first parameter.
- Currying can be done for any number of arguments. The bind method is used to create curried functions in JavaScript.
- Method chaining involves creating new methods by pre-setting arguments inside the function.
- Function closures involve returning a new function that has access to pre-set arguments even after it's returned.
- Currying allows for more flexibility and reusability in code. One way to implement currying is by using the bind method.
- Another way to implement currying is by using closures.
