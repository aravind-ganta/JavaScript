## Variables
* **Variables** in JavaScript are containers which hold resuable data. In other words, they are units of storage, like some sort of box into which we can put data.

* We have few rules when it comes to creating an identifier in JavaScript:

  1. The name of the identifier must be unique
  2. The name of the identifier should not be any reserved  JavaScript keyword.
  Ex: 
  > var let = 0;
  3. The first character must be a letter, an underscore (_), or a dollar sign ($). Subsequent characters may be any letter or digit or an underscore or dollar sign

**Note:**

- There are 3 different ways to make a variable: **var, let and const**
- **const** when variable is going to be constant and **let** when we plan on changing it

---

## Data Types

We can separate data types of current JavaScript Standard in two groups:
1. **Primitive Data Types**
   *   **Number :** 5, 6, 7.5 etc
   *   **String :** "Hello all" etc
   *   **Boolean:** true or false
   *   **Null :** represents null i.e. no value at all
   *   **Undefined:** A variable that has not been assigned a value is undefined
2. **Non-Primitive Data Types**
   *   **Object :** instance through which we can access members
   *   **Array :** group of similar values
   *   **RegExp:** represents regular expression

---

## Comments
A **Comment** is text in the code which is not read while we're running the code

There are 2 types of comments:

1. **Multi-line comments:** 
* To write a comment that stretches over more than one line.
* Multi-line comments are often used for descriptions of how script works
```
/* multi
   line
   comment */
```
2. **Single-line comments:**
* Single line comments are often used for short descriptions of what the code is doing.
```
// single line comment
```