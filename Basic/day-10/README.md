## DOM- Document Object Model
* **DOM (Document Object Model)** is a standard to access and share documents over internet
* **DOM** is not a language but more of a standard to represent a document over the web. **DOM** is a set of nested tree where each **node** represents a particular html element
* HTML DOM defines how an html page is structured, how it can be modified, properties, and styles that can be added

### Accessing DOM
* **DOM elements** can be accessed and modified using the methods like **createElement or appendChild**
* We can use **DOM events** like **onload** to do something when event has fired.

### Selecting Elements
* document.getElementById()
* document.getElementByTagName()
* document.querySelectorAll()

### Element Properties and Methods
* **Attributes** is what we assign in html. **Properties** stored in DOM objects
#### Properties
* **classlist:** a list of class assigned to an element - not a string its an array
* **id:** string of the id assigned to an element
* **classname:** string of classes assigned to an element - if there are more than one class separated by space
* **innerHTML:** inner content of the element - if has nested elements then in string form
#### Methods
* **addEventListener:** listen to any type of event and call some function when that event has occured. types can be click, mousedown, mouseup, focus, blur etc,.
* **hasAttribute:** method to check if an element has an attribute or not
* **removeAttribute:** remove some attribute assigned to an element
* **getBoundingClientReact:** returns the height, width, left, and top values of an element related to the browser
* **removeEventListener:** remove event listener from an element
* **scroll:** scroll to an element position

### Creating, Traversing, and Removing Nodes
* document.createElement()
* element.appendChild()
* document.querySelector()
* element.firstElementChild
* element.remove()
