/**This file contains code related to Objects in JS */

const firstName = 'Aravind';
const person = {
    firstName,
    lastName: 'Ganta',
    age: 25,
    bike:{
        year: 2023,
        color: 'Red',
    },
};

// Accessing properties
person.firstName;
person.company = {
    name: 'Google',
    location: 'Hyderabad',
}

function displayCar(){
    var result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
    console.log(result);
}

function Car(make,model,year,owner){
    this.make=make;
    this.model=model;
    this.year=year;
    this.owner=owner;
    this.displayCar=displayCar;
}

// Create an instance of Car
var myCar = new Car("Toyota", "Camry", 2023, "Alice");
myCar.displayCar();