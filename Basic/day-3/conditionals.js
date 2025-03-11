/**This file contains code related to Conditional Statements in JS */

const age = 18;
const isCool = true;
if (isCool && age >= 18) {
    console.log('You may enter, welcome!');
} else if (age === 18) {
    console.log('You just turned 18, welcome!');
} else {
    console.log('Go away!');
}

const day = 'Monday';
// Switch Statement
switch (day) {
    case 'Monday':
        console.log('Work started!');
        break;
    case 'Tuesday':
        console.log('In the middle of the work');
        break;
    case 'Wednesday':
        console.log('Peak work');
        break;
    case 'Thursday':
        console.log('About to complete');
        break;
    case 'Friday':
        console.log("Thinking about Weekend!");
        break;
    default:
        console.log('Chillout');
        break;
}

// Terenary Operator
age > 18 ? console.log('You can drive') : console.log('You may not drive yet');
