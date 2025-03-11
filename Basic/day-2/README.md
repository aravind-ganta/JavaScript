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
  * **AND (&&)** operator checks whether all operands are truthy value. if they are truthy, it returns true, otherwise it returns false
  * **OR (||)** operator checks whether atleast one operand is true value. if there is at least one true, it returns true, otherwise it returns false
  * **NOT (!)** operator reverses the boolean result of the condition
4. **Assignment Operators (=, +=, -=, *=, /=)**
  * An assignment operator assigns a value to its left operator based on the value of its right operand.
5. **Conditional Operators**