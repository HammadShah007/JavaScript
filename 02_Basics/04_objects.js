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

console.log(obj3);

