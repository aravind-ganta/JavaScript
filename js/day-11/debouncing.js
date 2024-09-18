// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data...", counter++);
};

const doSomeMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, ...args);
    }, d);
  };
};

const betterFunction = doSomeMagic(getData, 500);

// ES6 version of this solution:
// let counter = 0;
const fetchFunc = (e) => {
  console.log("Fetching data...", counter++, e);
};

const debounce = (functionRef, timeInMS) => {
  let timer;
  return (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => functionRef(e), timeInMS);
  };
};

const debounceFunc = debounce(fetchFunc, 300);
