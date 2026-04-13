// function sayMyName() {
//     console.log("H");
//     console.log("A");
//     console.log("M");
//     console.log("M");
//     console.log("A");
//     console.log("D");
// }

// console.log(sayMyName); //Referring to the function
// sayMyName(); // calling the function or execute the function

//Note: If you forget the parentheses, the function will not be executed, and instead, it will return the function definition.

// function addTwoNumbers(num1, num2) //Parameters are the variables that we define in the function definition. They act as placeholders for the values that will be passed to the function when it is called.
// {
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 5); //Arguments are the actual values that we pass to the function when we call it. They are assigned to the corresponding parameters in the function definition. In this case, 3 is assigned to num1 and 5 is assigned to num2.
// addTwoNumbers(10, 20);
// addTwoNumbers(-5, 15);

// const result = addTwoNumbers(7, 8); // The function does not return any value, so the result will be undefined.
// console.log("Result: ", result); // Output: undefined

function addTwoNumbers(num1, num2) {
  // const sum = num1 + num2;
  // console.log("The sum is: ", sum); // This will print the sum of num1 and num2 to the console.
  // return sum; // The return statement is used to specify the value that a function should return when it is called. In this case, the function will return the value of sum, which is the result of adding num1 and num2.
  // console.log("This will not be executed"); // Any code after the return statement will not be executed, as the function will exit immediately after returning the value.
  return num1 + num2; // We can directly return the result of the addition without storing it in a variable.
}

// const result = addTwoNumbers(7, 8); // Now the function will return the sum of 7 and 8, which is 15.
// console.log("Result: ", result); // Output: Result: 15

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return; // This will exit the function if the username is not provided. but it will not work if the username is an empty string, as an empty string is a valid value for a username. To handle this case, we can check if the username is falsy (i.e., if it is an empty string, null, undefined, 0, or false) instead of checking if it is undefined.
  }
  // if (!username) {
  //     console.log("Please enter a username");
  //     return; // This will exit the function if the username is not provided.
  // }
  return `Welcome back, ${username}!`; // This will return a welcome message with the username.
  // after return statement, the function will exit and any code after the return statement will not be executed. So, if we try to log a message after the return statement, it will not be executed.
}

console.log(loginUserMessage());
// console.log(loginUserMessage(""));

function calculateBill(val1, val2, ...amount) {
  return amount;
}

// console.log(calculateBill(200, 300, 400, 500));

const user = {
    userName: "Hammad",
    price: 199
}


