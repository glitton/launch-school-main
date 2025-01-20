/*
P: Write a function that takes a string and returns true if the string follows the pattern "XYYX", where X and Y can be any letter, and false otherwise. The function should be case-insensitive.

Example:
Input: "ABBA"
Output: true
Input: "ABCA"
Output: false

D: Array
A:
- Convert string to an array
- compare the first half (toLowerCase) with the second half which is reversed
  -- if they are equal, return true
  - else false
*/

function stringPattern(str) {
  let strFirstHalfArr = str
    .slice(0, str.length - str.length / 2)
    .split("")
    .join("");
  let strSecondHalfArr = str
    .slice(str.length - str.length / 2)
    .split("")
    .reverse()
    .join("");
  return strFirstHalfArr === strSecondHalfArr;
}

console.log(stringPattern("ABBA")); //true
console.log(stringPattern("ABCA")); //false
