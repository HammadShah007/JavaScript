//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);
// console.log(id);
// console.log(anotherId);


// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["spiderman", "batman", "superman", "ironman"];

// console.log(typeof heros);

let myObj = {
    name: "hitesh",
    age: 22,
}

// console.log(typeof myObj);


const myFunction = function(){
    console.log("Hello world");
}

// myFunction();


// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack (Primitive) and Heap (Reference / Non-primitive)

// Primitive data types are stored in the stack, which is a simple data structure that operates in a last-in-first-out (LIFO) manner. When a primitive value is assigned to a variable, it is stored directly in the stack. This means that when you copy a primitive value from one variable to another, a new copy of the value is created in the stack.

// Reference data types, on the other hand, are stored in the heap, which is a more complex data structure that allows for dynamic memory allocation. When a reference value is assigned to a variable, it is stored in the heap, and the variable holds a reference (or pointer) to that location in memory. When you copy a reference value from one variable to another, both variables point to the same location in the heap, meaning that changes made through one variable will affect the other variable as well.

let myYoutubeChannel = "chai with javaScript";

let anotherChannel = myYoutubeChannel;

anotherChannel = "javaScript with chai";

// console.log(myYoutubeChannel);
// console.log(anotherChannel);

let userOne = {
    name: "Ali",
    age: 21,
}

let userTwo = userOne;

userTwo.name = "Ahmed";

console.log(userOne.name);
console.log(userTwo.name);