// what, why Promise?
const cart = ["shoes", "pants", "kurtha"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
}); // orderId

const promise = createOrder(cart);
// promise make sure function runs once
promise.then(function (orderId) {
  proceedToPayment(orderId);
});

const GITHUB_API = "https://api.github.com/users/aravind-ganta";

const user = fetch(GITHUB_API);
console.log(user);

user.then(function (data) {
  console.log(data);
});

// using promises
createOrder(cart)
  .then(function (orderId) {
    return procedeToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance();
  });

// using arrow functions
createOrder(cart)
  .then((orderId) => procedeToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));
