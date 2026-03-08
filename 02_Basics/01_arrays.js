// Array
// Investigation Study

// const arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(typeof arr);

// const arr2 = new Array(1, 2, 3, 4, 5);

// console.log(arr2);
// console.log(typeof arr2);

// const arr3 = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];

// console.log(arr3);
// console.log(typeof arr3);

// console.log(arr3[1]);

// Array Methods

// console.log(arr3.length);

/* arr3.push("New Element");
   console.log(arr3);
   NOTE: that the push method modifies the original array and does not return a new array. */

/* const pushedArray = arr3.push("New Element");
   console.log(typeof pushedArray);
   NOTE: that the push method returns the new length of the array, not the array itself. */

/* console.log(arr3);
   NOTE: that the push method modifies the original array and does not return a new array. */

/* arr3.pop();
   console.log(arr3);
   NOTE: that the pop method modifies the original array and does not return a new array. */

/* const poppedElement = arr3.pop();
   console.log(typeof poppedElement);
   NOTE: that the pop method returns the removed element, not the array itself. */


// arr3.unshift("New Element");
// console.log(arr3);
//Note: that the unshift method modifies the original array and does not return a new array.

// const unshiftedArray = arr3.unshift(0);
// console.log(unshiftedArray);
//Note: that the unshift method returns the new length of the array, not the array itself.

// arr3.shift();
// console.log(arr3);
//Note: that the shift method modifies the original array and does not return a new array.

// const shiftedArray = arr3.shift()
// console.log(typeof shiftedArray);
//Note: that the shift method returns the removed element, not the array itself.

// console.log(arr3.includes("Hello"));
//Note: that the includes method returns a boolean value indicating whether the specified element is present in the array or not.

// console.log(arr3.indexOf(true));
//Note: that the indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// console.log(arr3.lastIndexOf(true));
//Note: that the lastIndexOf method returns the last index at which a given element can be found in the array, or -1 if it is not present.

// const newArr = arr3.join("-");

// console.log(newArr);
// console.log(typeof newArr);
// console.log(arr3);

//Note: that the join method returns a new string by concatenating all of the elements in an array, separated by the specified separator.


//slice and splice

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("A ", arr3);

const slicedArr = arr3.slice(0, 4);

console.log(slicedArr);
console.log("B ", arr3);
//Note: that the slice method returns a new array containing a portion of the original array, without modifying the original array.

const splicedArr = arr3.splice(0, 4);
console.log(splicedArr);
console.log("C ", arr3);
//Note: that the splice method modifies the original array and returns a new array containing the removed elements.