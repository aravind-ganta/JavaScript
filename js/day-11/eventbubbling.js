// Event Bubbling: Bubbles up(default) - dont pass third argument or false.
// Event Capturing: Trickles down - true
// Capuring happens first, then bubbling.
document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grand Parent Clicked!");
    e.stopPropagation();
  },
  true //capturing
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
  },
  false //bubbling
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
    e.stopPropagation();
  },
  true //capturing
);
