// Object singleton
// Object.create


// Object Literals

let mySym = Symbol("key1")
let myArray = Array(1,2,3,4)

// console.log(myArray);



const jsUser = {
    name: "Hammad",
    "first name": "Muhammad",
    age: 22,
    email: "hammad@example.com",
    location: "Pakistan",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
    [myArray]: [],
    [mySym]: "value1",
};

jsUser.email = "hammad@google.com"
Object.freeze(jsUser)
jsUser.email = "hammad@outlook.com"


// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser.name);
// console.log(jsUser["first name"]);
// console.log(jsUser[mySym]);




jsUser.greeting = function() {
    console.log("Salam kese hain aap");
}

jsUser.greetingTwo = function() {
    console.log(`Salam kese hain aap ${this.name}`);
}


// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())
