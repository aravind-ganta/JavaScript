## Conditional Statements and JS Loops

```
if (value) {
    //value is truthy
} else {
    //value is falsy
    // it could be false, 0, '', null, undefined or NaN
}
```
### Truthy/ Falsy Values
* Truthy expressions always evaluate to boolean true and falsy evaluate to boolean false
* When we say that a value is truthy in JS, we don't just mean that the value is true
* Rather, what we mean is that the value coerces to true when evaluated in a boolean context
* There are only 6 falsy values, all the other values are truthy
    ```
    * false
    * 0 (zero)
    * "", '', `` (empty strings)
    * null
    * undefined
    * NaN (not a number)
    ```
  > Note: Empty array ([]) is not falsy

### Switch Statement
* It always strictly checks the conditions
* If value matches with a case, statements inside the case will be executed. Else, default case will be executed  

  ```
  switch (value) {
    case value1:
      statement;
      break;
    case value2:
      statement;
      break;
    dafault:
      statement;
      break;
  }
  ```

### Terenary Operator
* It should be used for the simple true or false checks
* If condition is true, statement1 is executed. Else, statement2 is executed
```
condition ? statement1: statement2;
```

### for loop
* For loops are declared with 3 optional expressions separated by semicolons: initialization, condition, and final-expression. Followed by a statement (usually a block statement)
```
for([initialization];[condition];[final-expression]){
  statement;
}
```
 
### while loop