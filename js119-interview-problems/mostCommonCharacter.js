/*
P: 
Create a function that takes a string argument and returns the character that occurs most often in the string. 

If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.
input: string
output: string that represents the first character that appears the most 
Rules 
- case-insensitive
E:
D: object to store letter and counts
A:
Create a copy of the string in lower case
Initialize and empty object to store the key/value pairs of letters/count
Iterate over the string
Populate the object
Get an array of values, sorted ascending
return value at index 0
(may need to check the index to ensure that the return letter is the 1st character that occurs the most)
*/

function mostCommonChar(str) {
  let strCopy = str.toLowerCase();
  let letterCount = {};

  for (let idx = 0; idx < strCopy.length; idx++) {
    letterCount[strCopy[idx]] = (letterCount[strCopy[idx]] || 0) + 1;
  }
  let sortedValues = Object.entries(letterCount).sort((a, b) => b[1] - a[1]);
  return sortedValues[0][0];
}

const p = console.log;
p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

// let myStr = 'Peter Piper picked a peck of pickled peppers.';
// p(mostCommonChar(myStr) === 'p');

// myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
// p(mostCommonChar(myStr) === 'e');
