console.log("Start");

// callback queue
setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

// microtask queue
fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
