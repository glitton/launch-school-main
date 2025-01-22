/*
P: Write a method that takes a string as an argument and returns
the character that occurs least often in the given string.
If there are multiple characters with the equal lowest number
of occurrences, then return the one that appears first in the
string. When counting characters, consider the uppercase and
lowercase version to be the same.
input: string
output: string, letter that occurs the least amount of times in the input string
Rules
- case-insensitive
- if there are mult chars with the same lowest number, return the char that occurs first
- count spaces and punctuation as well as letters
E:
D: string, object to store counts
A:
Initialive vars
  - count object
Iteration
- convert string to an array of chars that are lowercase
- populate count object with letters as key and occurrence as value
- create an array of values, sorted
- find the letter associated with the lowest value
- return letter with the lowest value  
*/

function leastCommonChar(str) {
  let count = {};
  let strArray = str.toLowerCase().split("");

  for (let idx = 0; idx < strArray.length; idx++) {
    let char = strArray[idx];
    count[char] = (count[char] || 0) + 1;
  }
  let charCount = Object.entries(count);
  let sortedCharCount = charCount.sort((a, b) => a[1] - b[1]);
  return sortedCharCount[0][0];
}

console.log(leastCommonChar("Hello World")); // "h"
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers")); // "t"
console.log(leastCommonChar("Mississippi")); // "m"
console.log(leastCommonChar("Happy birthday!")); // ' '
console.log(leastCommonChar("aaaaaAAAA")); // 'a'
