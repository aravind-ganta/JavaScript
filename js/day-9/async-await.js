const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!!");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!!");
  }, 10000);
});

// await can only be used inside an async function
async function handlePromise() {
  console.log("Hello World!");
  // susupend the execution till p1 promise to resolve and start executing from where it left.
  const val = await p1;
  console.log("Hello JS");
  console.log(val);

  const val2 = await p2;
  console.log("Hello React");
  console.log(val2);
}
handlePromise();

// always returns a promise
// function getData() {
//     // JS Engine will not wait for promise to resolve.
//   p.then((res) => console.log(res));
//   console.log("Hello Js");
// }

// getData();

const API_URL = "https://api.github.com/users/aravind-ganta";
// await can only be used inside an async function
async function handlePromise1() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
    // fetch() => Response.json() => jsonValue
    // fetch().then(res=>res.json()).then(res=>console.log(res))
  } catch (err) {
    console.log(err);
  }
}
handlePromise1().catch((err) => console.log(err));
