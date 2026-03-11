const tinderUser = new Object();
// const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Hammad"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "regular@example.com",
    fullName: {
        userFullName: {
            firstName: "Regular",
            lastName: "User"
         }
    }
};

// console.log(regularUser.fullName?.userFullName?.firstName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        userId: 1, 
        name: "Hammad",
        isLoggedIn: false
    },
    {
        userId: 2, 
        name: "Hassan",
        isLoggedIn: false
    },
    {
        userId: 3, 
        name: "Hunain",
        isLoggedIn: false
    },
    {
        userId: 4, 
        name: "Hussain",
        isLoggedIn: false
    },
    {
        userId: 5, 
        name: "Hasnain",
        isLoggedIn: false
    },
    {
        userId: 6, 
        name: "Ali",
        isLoggedIn: false
    },
]

// console.log(users[0].name);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));






