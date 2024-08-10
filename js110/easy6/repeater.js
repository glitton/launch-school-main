/*
Problem: Write a function that takes a string, doubles every character in the 
string, and returns the result as a new string.

Examples/Test Cases:
Input: String
Output: String

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

Explicit Rules:
- Input is a string
- Output is a new string
- Punctuation is included and doubled
- Case sensitive
- Empty string won't be doubled
- Spaces between words are doubled

Data structure: 
Input: String
Intermediate: Array
Output: String

Algorithm:
1.  Split the string into an array of characters, including the spaces
2.  Iterate over the array, using map, return each element twice
4.  use the join method to transform the array into a new string
5.  Return the new string string

Code

*/

// function repeater(string) {
//   let stringChars = string.split("");
//   let doubledChars = stringChars.map((el) => el + el);
//   let doubledStringChars = doubledChars.join("");
//   return doubledStringChars;
// }

// Refactored to be shorter
function repeater(string) {
  return string
    .split("")
    .map((el) => el + el)
    .join("");
}

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
