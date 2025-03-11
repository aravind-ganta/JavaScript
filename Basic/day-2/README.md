## Operators
* JavaScript includes following categories of operators:
1. **Arithmetic Operators (+, -, \*, /, (), %, **, ++, --)**
  * Arithmetic operators are used to perform mathematical operations between numeric operands
2. **Comparison Operators (>, <, <=, >=, ==, !=, ===, !==)**
  * Comparison Operators compare two values and return boolean value **true or false**
  * always prefer strict equality (===)
  * If we strictly compare objects, we're never going to get true
```
    console.log({}==={}); //false
    console.log([]===[]); //false
```
  * The loose equality doesn't compare the data types. You should almost never use the loose equality
3. **Logical Operators (&&, ||, !)**
  * Logical Operators are used to combine two or more conditions.
  * **AND (&&)** operator in JS will first try to return the first falsy value. If none were found, it will return the last truthy value
  ```
  console.log('truthy' && 1 && 'test' && 999); //999
  console.log('truthy' && 0 && 'test' && 999); //0
  ```
  * The **AND (&&)** operator does the following:
    * It evaluates operands from left to right
    * It converts them to a boolean value
    * If the result is true, it continues to the next value
    * If the result is false, it stops and returns the original value of the operand
    * If all operands have been evaluated to true, it returns the last operand 
  * **OR (||)** operator in JS will first try to return the first truthy value. If none were found, it will return the last falsy value
  ```
  console.log('truthy' || 0 || 'test' || 999); //truthy
  console.log('' || 0 || null || undefined); //undefined
  ```
  * The **OR (||)** operator does the following:
    * For each operand, it converts it to a boolean value
    * If the result is true, it stops and returns the original value of that operand
    * If all operands have been evaluated to falsy, it returns the last operand
  * **NOT (!)** operator reverses the boolean result of the condition
  * The **NOT (!)** operator does the following:
    * Converts the operand to boolean type: true/false
    * Returns the inverse value
  * A **double NOT (!!)** is sometimes used for converting a value to boolean type:
  ```
  alert(!!'truthy'); //true
  alert(!!null); //false
  ```
4. **Assignment Operators (=, +=, -=, *=, /=)**
  * An assignment operator assigns a value to its left operator based on the value of its right operand.
5. **Conditional Operators**