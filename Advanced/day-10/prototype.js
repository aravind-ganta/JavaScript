let arr = ["Aravind", "Anand"];
let object = {
  name: "Aravind",
  city: "Hyderabad",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let object2 = {
  name: "Aditya",
};
// Never do this
object2.__proto__ = object;

console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);
console.log(Array.prototype);
console.log(Array.__proto__.__proto__);

console.log(object.__proto__);
console.log(Object.prototype);
console.log(object.getIntro());

Function.prototype.mybind = function () {
  console.log("mybind executed");
};
function fun() {}
console.log(fun.__proto__);
console.log(Function.prototype);
console.log(fun.__proto__.__proto__);
console.log(fun.mybind());

console.log(object2.__proto__);
console.log(object2.city);
console.log(object2.getIntro());
