console.log("Start");

// settimeout gurantees atleast time, not max time
setTimeout(function cbc() {
  console.log("callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("while expires");

function cb() {
  console.log("Callback");
}
// To defer some piece of code
setTimeout(cb, 0);

// 1 to 4 will be printed with 1 sec interval and then setTimeout and 5 will be printed at a time.
setTimeout(() => {
    console.log("setTimeout executed");
  }, 5000);
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
  console.log("a");
  let count = 0;
  setInterval(() => {
    if (count < 5) {
      count++;
      console.log(count);
    }
  }, 1000);
  
// Each of setTimeout has 1000 milliseconds timer, but they don't run at the same time. Each of them runs in every second in sequence.
  setTimeout(() => {
    console.log (1);
    setTimeout(() => {
        console.log (2);
        setTimeout(() => {
            console.log (3);
        }, 1000);
    }, 1000);
}, 1000);