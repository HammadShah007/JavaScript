// const name = "Hammad";

// const age = 22;

// console.log(name + age);

// console.log(`Salam my name is ${name} and my age is ${age}`);

// let gameName = new String('Call of duty');

// let gameName = "Call of duty";

// console.log(gameName.toUpperCase());


// -------**************  at()  **************-------
// Examples
// const sentence = "The quick brown fox jumps over the lazy dog.";

// let index = 6;

// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 6 returns the character i"

// index = -6;

// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -6 returns the character y"

// console.log(index);
// Expected output: -6


// -------**************  charAt()  **************-------
// Examples

// const sentence = "The quick brown fox jumps over the lazy dog.";

// const index = -6;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"

// Note: The charAt() method does not support negative integers as an index. If a negative integer is used, it will be treated as Nill. Therefore, sentence.charAt(-6) will return the character at index Nill which is an empty string. Hence, the output will be "The character at index -6 is " (with nothing after "is").


// -------**************  charCodeAt()  **************-------
// Examples

// const sentence = "The quick brown fox jumps over the lazy dog.";
// const sen = "NUL "

// const index = 7;

// console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "Character code 113 is equal to q"

// console.log(`Character code ${sen.charCodeAt(index)}`);

// Note: ASCII, stands for American Standard Code for Information Interchange is a character encoding standard that uses numeric codes to represent characters. The charCodeAt() method returns the UTF-16 code unit at the specified index, which is a numeric value that represents a character in the Unicode character set. For example, the character 'A' has a char code of 65, while 'a' has a char code of 97. The charCodeAt() method can be used to retrieve the char code of any character in a string, allowing developers to perform various operations based on the character's numeric representation.

// let password = "Hammad123";

// let hasUpper = false;
// let hasLower = false;
// let hasNumber = false;

// if (password.length < 8) {
//   console.log("Password too short");
// } else {

//   for (let i = 0; i < password.length; i++) {
//     let code = password.charCodeAt(i);

//     // A-Z
//     if (code >= 65 && code <= 90) {
//       hasUpper = true;
//     }

//     // a-z
//     else if (code >= 97 && code <= 122) {
//       hasLower = true;
//     }

//     // 0-9
//     else if (code >= 48 && code <= 57) {
//       hasNumber = true;
//     }
//   }

//   if (hasUpper && hasLower && hasNumber) {
//     console.log("Valid Password ✅");
//   } else {
//     console.log("Invalid Password ❌");
//   }
// }


// -------**************  codePointAt()  **************-------
// Examples

// let emoji = "😊";

// console.log(emoji.charCodeAt(0)); // 55357 (incomplete, first surrogate)
// console.log(emoji.charCodeAt(1)); // 56842 (second surrogate)
// console.log(emoji.codePointAt(0)); // 128522 ✅ complete emoji code


// Note: codePointAt() is a JavaScript string method that returns the full Unicode code point of the character at index.
// This is better than charCodeAt() for emojis and special characters because UTF-16 handles surrogate pairs.
// Syntax: string.codePointAt(index) - return type number (decimal or .toString(16) se hex).

// charcode() returns the UTF-16 code unit (emoji incomplete), while codepoint() returns the full Unicode code point (emoji preserved).


// -------**************  concat()  **************-------
// Examples

// let user = "Hassan";
// let message = "Welcome back, ".concat(user, "!");
// console.log(message);

// Tricky interview question: What will be the output of the following code?

// let a = "Salam";
// let b = a.concat(" World");

// a = "Hello";

// let c = b.concat(" Everyone");

// console.log(a);
// console.log(b);
// console.log(c);

// Note:Modern backend development mai template literals preferred hote hain kyunki readable, maintainable aur optimized hote hain. Performance difference negligible hota hai except heavy loops.


// -------**************  constructor String()  **************-------
// Examples

// let a = new String("Hammad");

// let b = String(a);

// console.log(typeof a);
// console.log(typeof b);
// console.log(`Salam ${b}`);


// note: The String() constructor creates a new String object. When you use the new keyword with String(), it creates an object wrapper around the string value. This means that a is an object, while b is a primitive string. When you use template literals or string concatenation, JavaScript automatically converts the String object to a primitive string, which is why you can use b in the template literal without any issues. However, it's generally recommended to use string literals (e.g., let a = "Hammad";) instead of the String() constructor for better performance and simplicity.


// -------**************  startsWith()  **************-------
// Examples

// const str = "Saturday night plans";

// console.log(str.startsWith("Sat"));
// Expected output: true

// console.log(str.startsWith("Sat", 3));
// Expected output: false


// const str = "To be, or not to be, that is the question.";

// console.log(str.startsWith("To be")); // true
// console.log(str.startsWith("not to be")); // false
// console.log(str.startsWith("ot to be", 11)); // true

// Note:
// startsWith(searchstring, position); // true if the characters in searchstring are found at the beginning of the string, starting at position. Otherwise, false.


// -------**************  endsWith()  **************-------
// Examples

// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// Expected output: true

// console.log(str1.endsWith("best", 17));
// Expected output: true

// const str2 = "Is this a question?";

// console.log(str2.endsWith("question"));
// Expected output: false

// Note:
// endsWith(searchstring, length); // true if the characters in searchstring are found at the end of the string, considering only up to length characters. Otherwise, false.


// -------**************  includes()  **************-------
// Examples

// const sentence = "The quick brown fox jumps over the lazy dog.";

// const word = "lazy";

// console.log(
//   `The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`,
// );
// Expected output: "The word "lazy" is in the sentence"

// Note: includes(searchstring, position); // true if the characters in searchstring are found in the string, starting at position. Otherwise, false.


// -------**************  indexOf()  **************-------
// Examples

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchName = "o";
// const firstIndexOf = paragraph.indexOf(searchName);

// console.log(`The index of the first "${searchName}" is ${firstIndexOf}`);
// Expected output: "The index of the first "dog" is 15"

// console.log(`The index of the second "${searchName}" is ${paragraph.indexOf(searchName, firstIndexOf + 1,)}`);
// Expected output: "The index of the second "dog" is 38"

// Note: indexOf(searchValue, fromIndex) returns the index of the first occurrence of searchValue in the string, starting the search at fromIndex. If searchValue is not found, it returns -1. To find subsequent occurrences, you can use the index of the previous occurrence plus one as the new fromIndex.


// -------**************  lastIndexOf()  **************-------
// Examples

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchName = "dog";

const lastIndexOf = paragraph.indexOf(searchName);

console.log(
    `The index of the first "${searchName}" is ${lastIndexOf}`
);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `Index of the last "${searchName}" is ${paragraph.lastIndexOf(searchName, lastIndexOf + 1)}`,
);
// Expected output: "Index of the last "dog" is 38"

// Note: lastIndexOf(searchValue, fromIndex) returns the index of the last occurrence of searchValue in the string, searching backwards from fromIndex. If searchValue is not found, it returns -1. If fromIndex is not provided, it defaults to the length of the string, meaning the search starts from the end of the string.



// localeCompare()
// match()
// matchAll()
// normalize()
// padEnd()
// padStart()
// repeat()
// replace()
// replaceAll()
// search()
// slice()
// small()
// split()
// strike()
// sub()
// substr()
// substring()
// sup()
// toLocaleLowerCase()
// toLocaleUpperCase()
// toLowerCase()
// toString()
// toUpperCase()
// toWellFormed()
// trim()
// trimEnd()
// trimStart()
// valueOf()
// isWellFormed()
// length