console.log("Namaste");

setTimeout(function () {
  console.log("Hello World!");
}, 5000);

console.log("Javascript");

const cart = ["shoes", "pants", "kurtha"];

// callback hell & inversion of control
api.createOrder(cart, function () {
  api.procedeToPayment(orderId, function (paymentInfo) {
    api.showOrderSummary(paymentInfo, function () {
      api.updateWalletBalance();
    });
  });
});

// solution
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
