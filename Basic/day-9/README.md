## Value vs Reference
* JavaScript differentiates Data Types on:
* **Primitive values:** Number, String, Boolean, Null, Undefined...
* **Complex values:** Objects, Arrays
* primitive values are **copied by values**, and that objects are **copied by reference**

## Cloning
* Copy the complex values and remove the reference

### Shallow Cloning
* We can achieve this using **Spread Operato**r in both Arrays and Objects
* In Arrays, we can use **Array.slice()**
* In Objects, we can use **Object.assign()**

### Deep Cloning
* When we have deeply nested objects, we need to create a deep clone. For an object to be a deep clone, it needs to destroy all the references
* We can achieve this using 2 methods:
    * **JSON.stringify():** Converts JS object to a string. During this process, all the references are destroyed
    * **JSON.parse():** parses a string, constructs the JS value or object contained in the string