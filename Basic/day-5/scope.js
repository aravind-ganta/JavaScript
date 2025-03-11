/**This file contains code related to Scope in JS */

// Global Scope
const name = "Aravind";

const logName = () => {
    // Local Scope
    if (true) {
        // Block scope
        let age = 25;
    }
    console.log(name);
    console.log(age); // Uncaught ReferenceError
};

logName();