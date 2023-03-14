// Person Constructor
// function Person (name, dob) {
//     this.name = name;
//     // this.age = age;
//     this.birthday = new Date(dob);

    // A common formular to calculate age from birthday!
    // this.calcAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }



    // when this is in the function scope it logs all declare variables
    // console.log(this);
//}
// But if declared in the global scope , it logs the window object

// To instantiate an object we use the "new Keyword"
// const brad = new Person('Brad', 30);
// const peace = new Person('Salam', 22);
// const bint = new Person('Hauwa', 21);


// const brad = new Person('Brad', '11-15-2001')
// console.log(brad.calcAge());

// THIS IS HOW CONSTRUCTORS WORK IN A CORE ES5->

// NEW TOPIC - PROTOTYPE
// Object.prototype
// Person.prototype

// Person constructor
// function Person (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);

    // // A common formular to calculate age from birthday!
    // this.calcAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
// }

// Calc Age
// Person.prototype.calcAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // A common formular to calculate age from birthday!
// }

// // Get full name
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// // Gets married
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 2001');

// console.log(mary);

// console.log(mary.getFullName())

// mary.getsMarried('Smith');

// console.log(mary.getFullName())

// Prototypal Inheritance
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Greeting (Prototype method)
// Person.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// Customer Constructor
// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// // Inherit Person Prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return customer
// Customer.prototype.constructor = Customer;

// // Create Customer
// const customer1 = new Customer('Tom', 'Smith', '09051223344', 'Standard');

// console.log(customer1);

// // Overwriting person prototype with a new one
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to RMC Tech NG`
// }

// console.log(customer1.greeting());

// CREATING OBJECTS USING Object.create()

// ES6 - CLASSES

// ES6 - SUBCLASSES
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '09055468922', 'Standard');

console.log(john);

console.log(Customer.getMembershipCost());