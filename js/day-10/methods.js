let name1 = {
  firstName: "Aravind",
  lastName: "Ganta",
};
let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

printFullName.call(name1, "Hyderabad", "Telangana");

let name2 = {
  firstName: "Virat",
  lastName: "Kohli",
};

// function borrowing
// call method
printFullName.call(name2, "Bangalore", "Karnataka");

// apply method
printFullName.apply(name2, ["Bangalore", "Karnataka"]);

// bind method
let printMyName = printFullName.bind(name2, "Bangalore", "Karnataka");
console.log(printMyName);
printFullName();
