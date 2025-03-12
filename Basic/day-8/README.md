## Objects
* Objects are building blocks for modern JS. In JS, an object is a standalone entity, with properties and type
* In simple words, object is an unordered collection of related data in form of key and value pairs
```
const person = {
    firstName: 'Aravind',
    lastName: 'Ganta',
    age: 25,
};
```
* To access, add, or update a property of object, we use dot notation
```
person.firstName;
person.company = {
    name: 'Google',
    location: 'Hyderabad',
};
person.company.name = 'S2Tech';
```
* Second way to retrieve properties from an object, is square bracket notation
```
person['firstName'];
```
### Object Methods
* A method is a property of an object that is a function
* Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object
```
var myObj = {
    myMethod: function(params) {
        // statements
    },
    myOtherMethod(params) {
        // This also works
    }
}
// call the method
myObj.myMethod(params);
```
