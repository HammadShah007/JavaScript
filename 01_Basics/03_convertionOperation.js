let score = 33
let score0 = "33abc"
let score1 = null
let score2 = undefined
let score3 = true

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
let valueInNumber0 = Number(score0);
let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);

// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber0);
// console.log(typeof valueInNumber1);
// console.log(typeof valueInNumber2);
// console.log(typeof valueInNumber3);

// console.log(valueInNumber);
// console.log(valueInNumber0);
// console.log(valueInNumber1);
// console.log(valueInNumber2);
// console.log(valueInNumber3);

/*
Notes:
"33" => 33
"33abc" => NaN
true => 1
false => 0
undefined => NaN
*/


let isLoggedIn = 1;
let isLoggedIn1 = 0;

let booleanIsLoggedIn = Boolean(isLoggedIn);
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);

// console.log(booleanIsLoggedIn1);

/*
Notes:
1 => true
0 => false
"" => false
"Hammad" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

