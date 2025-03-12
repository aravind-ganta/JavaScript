/**This file contains code related to Arrays in JS */

const months = ['January', 'Feb', 'March', 'April', 'May'];

console.log(months[0]); //January
months[1] = 'February';
months[5] = 'June';
console.log(months.length); //6
console.log(months.push('July')); //7
console.log(months.pop()); //July
console.log(months.shift()); //January
console.log(months.unshift('January')); //6
console.log(months.splice(4, 2)); //['May', 'June']
console.log(months.slice(2)); //['March', 'April']
console.log(months.concat('May')); //['January', 'February', 'March', 'April', 'May']
console.log(months.join('-')); //January-February-March-April
console.log(months.reverse()); //['April', 'March', 'February', 'January']
console.log(months.toString()); //April,March,February,January
console.log(months.includes('January')); //true
console.log(months.sort()); //['April', 'February', 'January', 'March']
console.log(months.indexOf('January')); //2