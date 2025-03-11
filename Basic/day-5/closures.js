/**This file contains code related to Closures in JS */

const outer = () => {
    const outerVar = 'Hello';
    const inner = () => {
        const innerVar = 'Hi';
        console.log(innerVar, outerVar);
    };
    return inner;
    // inner();
};

const innerFn = outer();
innerFn();

// outer();