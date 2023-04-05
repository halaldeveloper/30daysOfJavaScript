// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest pattern, 3dots - spread operator
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// Array Destructuring

// const people = ['John', 'Malik', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2);

// Parse array returned from function
// function getPeople() {
//     return ['John', 'Malik', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring

const person = {
    user: 'John Doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function(){
        console.log('Hello');
    }
}

// Old ES5
// const name = person.name,
//     age = person.age,
//     city = person.city;

// New ES6 Destructuring
const { user, age, city, sayHello } = person;

console.log(user, age, city);

sayHello();