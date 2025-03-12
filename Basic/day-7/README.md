## Arrays
* Array is a data structure to store ordered collections
* Array can store elements of any type:
```
const arr = [
    'Hi',
    { name: 'Aravind' },
    true,
    function () {
        alert('Hello');
    },
];
```
### Array Methods
* **arr[index]:** returns a certain value from an array
* **arr.push(value):** adds the value to the end of the array
* **arr.pop():** removes the value from the end of the array
* **arr.shift():** removes the value from the start of the array
* **arr.unshift(value):** adds the value to the start of the array
* **arr.splice(index, number):** removes number of elements starting from the index
* **arr.slice(index):** copies a certain part of the array
* **concat():** Join several arrays into one
* **join(''):** returns a string of array values
* **array.length:** returns the number of elements in the array
* **reverse():** reverse the order of the elements in an array
* **toString():** returns a string representing the specified array and its elements
* **includes(element):** determines whether an array includes a certain value among its entries, returning true or false as appropriate
* **sort():** It sorts the elements of an array in place and returns the sorted array. It sorts an array alphabetically
* **indexOF(element):** returns the index of the first occurance of that value
* **lastIndexOf(element):** returns the index of the last occurance of that value

### Array Methods for looping
* **array.forEach():** It executes a provided function once for each array element
```
array.forEach((element, index) => {
    // code block to be executed
})
```
* **array.map():** It creates a new array populated with the results of calling a provided function on every element in the calling array
```
array.map((element, index)=>{
    // code block to be executed
})
```
* **array.filter():** It creates a new array with all elements that pass the test implemented by the provided function
```
array.filter((element, index)=>{
    // code block to be executed
})
```
* **array.findIndex():** It returns the index of the first element in the array that satisfies the provided testing function, else returns -1
```
array.findIndex((el, inx, arr)=>{
    // code block to be executed
})
```
* **array.some():** It tests whether at least one element in the array passes the test implemented by the provided function. It returns true or false
```
array.some((el, inx, arr)=>{
    // code block to be executed
})
```
* **array.every():** It tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
```
array.every((element, index)=>{
    // code block to be executed
})
```
* **array.reduce():** It is used to accumulate values in an array into a single result. It works from left-to-right
```
array.reduce((preVal,curVal, curIndex, arr)=>{
    // code block to be executed
}, initialVal)
```
* **array.reduceRight():** It is used to accumulate values in an array into a single result. It works from right-to-left
```
array.reduceRight((accumulator, curVal, index, arr)=>{
    // code block to be executed
})
```