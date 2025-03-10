localStorage.setItem("name", "Aravind");

localStorage.setItem("city","Hyderabad");

console.log(localStorage.getItem("name"));
// localStorage.removeItem("city");
localStorage.clear();


// object
const user={name:"Aravind"}

// to store data in string object - JSON.stringify()
localStorage.setItem("user",JSON.stringify(user));

// to console log the object - JSON.parse()
console.log(JSON.parse(localStorage.getItem("user")));