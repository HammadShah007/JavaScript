// const marvelHeroes = ["thor", "ironman", "spiderman", "hulk", "captain america"];
// const dcHeroes = ["superman", "batman", "wonder woman", "flash", "aquaman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes.length);
//Note: that the push method modifies the original array and does not return a new array. In this case, it adds the entire dcHeroes array as a single element to the marvelHeroes array, resulting in a nested array structure. The length of marvelHeroes will be 6, as it now contains 5 individual hero names and 1 nested array (dcHeroes).

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);
// console.log(allHeroes.length);
//Note: that the concat method does not modify the original arrays and returns a new array that is the result of concatenating the two arrays.

// const allNewHeros = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeros);
// console.log(allNewHeros.length);
//Note: that the spread operator does not modify the original arrays and returns a new array that is the result of concatenating the two arrays.


// const anotherArray = [1, 2, [3, 4, 5], 6, [7, [8, 9]]];

// console.log(anotherArray);

// const flatedArray = anotherArray.flat(Infinity);

// console.log(flatedArray);
//Note: that the flat method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. In this case, using Infinity as the depth will flatten all nested arrays regardless of their depth.


// console.log(Array.isArray("Hammad"));
// console.log(Array.from("Hammad"));
// console.log(Array.from({name: "Hammad"}));

// console.log(Array.from({ length: 3 }));

// const arr = Array.from({ length: 100 }, (_, i) => i);
// const arr2 = Array.from({ length: 100 }, (_, i) => i + 1);
// console.log(arr);


// let score = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score, score2, score3));



// Arrays Questions:

// Question 1: Array me se last element console.log karo
// const arr = ["apple", "banana", "mango"];
// console.log(arr[arr.length - 1]);


// Question 2: Array me se first element console.log karo
// console.log(arr[0]);


// Question 3: Is array me "orange" end me add karo using JavaScript method.
// const fruits = ["apple", "banana"];
// fruits.push("orange")
// console.log(fruits);


// Question 3: Is array ka first element remove karo.
// const numbers = [10, 20, 30, 40];
// numbers.shift()
// console.log(numbers);


// Question 4: Is array ki length console.log karo.
// const cities = ["Karachi", "Lahore", "Islamabad"];
// console.log(cities.length)


// Question 5: Is array se "Sara" console.log karo.
// const users = [
//   { name: "Ali" },
//   { name: "Sara" },
//   { name: "Ahmed" }
// ]
// console.log(users[1].name);




const nums = [1, 2, 3, 4];
console.log(nums.map((nums) => nums * 2 ));
