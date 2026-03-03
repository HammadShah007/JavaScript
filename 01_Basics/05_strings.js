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

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchName = "dog";

// const lastIndexOf = paragraph.indexOf(searchName);

// console.log(
//     `The index of the first "${searchName}" is ${lastIndexOf}`
// );
// // Expected output: "The index of the first "dog" is 15"

// console.log(
//   `Index of the last "${searchName}" is ${paragraph.lastIndexOf(searchName, lastIndexOf + 1)}`,
// );
// Expected output: "Index of the last "dog" is 38"

// Note: lastIndexOf(searchValue, fromIndex) returns the index of the last occurrence of searchValue in the string, searching backwards from fromIndex. If searchValue is not found, it returns -1. If fromIndex is not provided, it defaults to the length of the string, meaning the search starts from the end of the string.


// -------**************  localeCompare()  **************-------
// Examples

// const a = "réservé"; // With accents, lowercase
// const b = "RESERVE"; // No accents, uppercase

// console.log(a.localeCompare(b));
// // Expected output: 1
// console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// // Expected output: 0

// Note: The localeCompare() method compares two strings in the current locale and returns a number indicating whether the reference string comes before, after, or is the same as the compared string in sort order. The method can take optional parameters to specify the locale and comparison options, allowing for more accurate comparisons based on language-specific rules. In the example above, the first comparison considers accents and case, resulting in a positive value (1) because "réservé" is considered greater than "RESERVE". The second comparison ignores accents and case (sensitivity: "base"), resulting in 0, indicating that the strings are considered equivalent for sorting purposes.


// -------**************  match()  **************-------
// Examples


// let str = "Hello Hammad";

// console.log(str.match("Hammad"));

// let str = "Hammad123";

// console.log(str.match(/[0-9]/));

// let str = "HamMad123";

// console.log(str.match(/[A-Z]/g));

// Note: The match() method retrieves the result of matching a string against a regular expression. It returns an array of matches or null if no matches are found. In the example above, str.match(/[A-Z]/g) returns an array of all uppercase letters in the string "HamMad123", which are "H", "M", and "M". The 'g' flag in the regular expression indicates a global search, meaning it will find all matches rather than stopping after the first match.




// -------**************  matchAll()  **************-------
// Examples

// -------**************  normalize()  **************-------
// Examples

// const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
// const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

// console.log(`${name1}, ${name2}`);
// // Expected output: "Amélie, Amélie"
// console.log(name1 === name2);
// // Expected output: false
// console.log(name1.length === name2.length);
// // Expected output: false

// const name1NFC = name1.normalize("NFC");
// const name2NFC = name2.normalize("NFC");

// console.log(`${name1NFC}, ${name2NFC}`);
// // Expected output: "Amélie, Amélie"
// console.log(name1NFC === name2NFC);
// // Expected output: true
// console.log(name1NFC.length === name2NFC.length);
// // Expected output: true

// Note: The normalize() method in JavaScript is used to convert a string into a normalized form, which can be useful for comparing strings that may have different Unicode representations. In the example above, name1 and name2 represent the same name "Amélie" but are composed of different Unicode characters. When we normalize both strings using NFC (Normalization Form C), they become identical in terms of their Unicode representation, allowing for accurate comparison and consistent length.


// -------**************  padEnd()  **************-------
// Examples

// const str1 = "Breaded Mushrooms";

// console.log(str1.padEnd(25, "."));
// // Expected output: "Breaded Mushrooms........"

// const str2 = "200";

// console.log(str2.padEnd(5));
// // Expected output: "200  "

//Note: The padEnd() method pads the current string with a given string (repeated, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string. If the padding string is not provided, it defaults to a space character. In the example above, str1.padEnd(25, ".") pads the string "Breaded Mushrooms" with periods until it reaches a total length of 25 characters, while str2.padEnd(5) pads the string "200" with spaces until it reaches a total length of 5 characters.


// -------**************  padStart()  **************-------
// Examples

// const str = "5";

// console.log(str.padStart(2, "0"));
// // Expected output: "05"

// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

// console.log(maskedNumber);
// // Expected output: "************5581"


//Note: The padStart() method pads the current string with a given string (repeated, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string. In the example above, str.padStart(2, "0") pads the string "5" with a "0" at the beginning to make it two characters long, resulting in "05". In the second example, we take the last 4 digits of a full credit card number and pad it with asterisks (*) at the start to mask all but the last 4 digits, resulting in "************5581".


// -------**************  repeat()  **************-------
// Examples

// const mood = "Happy! ";

// console.log(`I feel ${mood.repeat(3)}`);
// // Expected output: "I feel Happy! Happy! Happy! "


//Note: The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. In the example above, mood.repeat(3) creates a new string that consists of the original string "Happy! " repeated three times, resulting in "Happy! Happy! Happy! ".


// -------**************  replace()  **************-------
// Examples

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", "my"));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /dog/i;
// console.log(paragraph.replace(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"

// console.log(paragraph);


//Note: The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a regular expression, and the replacement can be a string or a function to be called for each match. In the example above, the first replace() call replaces "Ruth's" with "my", while the second replace() call uses a regular expression to replace the first occurrence of "dog" (case-insensitive) with "ferret". The original string remains unchanged, and the method returns a new modified string.


// -------**************  replaceAll()  **************-------
// Examples

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replaceAll("dog", "monkey"));
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"

// // Global flag required when calling replaceAll with regex
// const regex = /dog/gi;
// console.log(paragraph.replaceAll(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your ferret!"

//Note: The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a regular expression, and the replacement can be a string or a function to be called for each match. In the example above, replaceAll("dog", "monkey") replaces all occurrences of "dog" with "monkey". When using a regular expression with replaceAll(), the global flag (g) must be included to ensure that all matches are replaced, as shown in the second example where /dog/gi replaces all occurrences of "dog" (case-insensitive) with "ferret". The original string remains unchanged, and the method returns a new modified string.


// -------**************  search()  **************-------
// Examples

const paragraph = "I think Ruth's dog is cuter than your dog!";

const regex = /[a-z]/g;

console.log(paragraph.search(regex));
console.log(paragraph[paragraph.search(regex)]);

//Note: The search() method executes a search for a match between a regular expression and this String object. It returns the index of the first match, or -1 if no match was found. In the example above, paragraph.search(regex) returns the index of the first lowercase letter in the string, which is 2 (the letter "h" in "think"). The second console.log retrieves the character at that index, confirming that it is indeed "h".



// -------**************  slice()  **************-------
// Examples
// 
// -------**************  small()  **************-------
// Examples
// 
// -------**************  split()  **************-------
// Examples
// 
// -------**************  strike()  **************-------
// Examples
// 
// -------**************  sub()  **************-------
// Examples
// 
// -------**************  substr()  **************-------
// Examples
// 
// -------**************  lastIndexOf()  **************-------
// Examples
// substring()
// -------**************  lastIndexOf()  **************-------
// Examples
// sup()
// -------**************  lastIndexOf()  **************-------
// Examples
// toLocaleLowerCase()
// -------**************  lastIndexOf()  **************-------
// Examples
// toLocaleUpperCase()
// -------**************  lastIndexOf()  **************-------
// Examples
// toLowerCase()
// -------**************  lastIndexOf()  **************-------
// Examples
// toString()
// -------**************  lastIndexOf()  **************-------
// Examples
// toUpperCase()
// -------**************  lastIndexOf()  **************-------
// Examples
// toWellFormed()
// -------**************  lastIndexOf()  **************-------
// Examples
// trim()
// -------**************  lastIndexOf()  **************-------
// Examples
// trimEnd()
// -------**************  lastIndexOf()  **************-------
// Examples
// trimStart()
// -------**************  lastIndexOf()  **************-------
// Examples
// valueOf()
// -------**************  lastIndexOf()  **************-------
// Examples
// isWellFormed()
// -------**************  lastIndexOf()  **************-------
// Examples
// length