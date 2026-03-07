//Dates

const now = new Date();

// console.log(typeof now);

// console.log(now);

// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log(now.toLocaleString());
// console.log(now.toDateString());
// console.log(now.toTimeString());

// const myCreatedDate = new Date(2033, 0, 22);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// console.log(myCreatedDate);

let myTimeStamp = Date.now()

console.log(myTimeStamp);

const myDate = new Date(myTimeStamp);

console.log(myDate);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})




