/**This file contains code related to Array methods for looping in JS */

const months = ['January', 'Feb', 'March', 'April', 'May'];
// loop an array
for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

// forEach
months.forEach((ele, index) => {
    console.log(`${index}: ${ele}`);
})

// map
const arr1 = months.map((ele, index) => {
    return ele.toUpperCase();
})
console.log(arr1);

// filter
const arr2 = months.filter((ele, index) => {
    return ele.startsWith("J");
})
console.log(arr2);

// findIndex
const index = months.findIndex((ele, index, arr) => {
    return ele.startsWith("J");
})
console.log(index);

// some
const isStartWithJ = months.some((ele, index, arr) => {
    return ele.startsWith("J");
})
console.log(isStartWithJ);

// every
const isEndWithY = months.every((ele, index, arr) => {
    return ele.endsWith('y');
})
console.log(isEndWithY);

// reduce
const concatString = months.reduce((acc, curVal, index, arr) => {
    return acc + " " + curVal;
}, "Months:")
console.log(concatString);

// reduceRight
const concatFromRight = months.reduceRight((acc, curVal, index, arr) => {
    return acc + ", " + curVal;
})
console.log(concatFromRight);