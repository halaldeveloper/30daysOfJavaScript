// const sayHello = function() {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }


// one line function does not need braces
// const sayHello = () => console.log('Hello');

// one line returns 
// const sayHello = () => 'Hello';

// One line returns same as above
// const sayHello = function() {
//     return 'Hello';
// }


// // Return object
// const sayHello = () => ({msg: 'Hello'});

// Single param doesn't need parenthesis (name)
// const sayHello = name => console.log(`hello ${name}`);


// multiple params need parenthesis (x, y)
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Salam');

const users = ['Nathan', 'John', 'Salam', 'Doctor'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });


// Shortert
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);