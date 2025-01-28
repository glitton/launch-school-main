/*
P: Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.
input: string
output: string
Rules - case-insensitive
E: 
D: Object

A: 
Convert string to an array of letters, all lower case
Iterate over the array
Populate the object where the key is the letter and the value is the occurrence
Create an array of the object's key/value pairs
Sort in descending order
Return the first key in the array which represents the letter that occurs the most
*/

function mostCommonChar(str) {
  let strArray = str.toLowerCase().split("");
  let letterCount = {};

  strArray.forEach(
    (letter) => (letterCount[letter] = (letterCount[letter] || 0) + 1)
  );

  return Object.entries(letterCount).sort((a, b) => b[1] - a[1])[0][0];
}

const p = console.log;
p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

// let myStr = "Peter Piper picked a peck of pickled peppers.";
// p(mostCommonChar(myStr) === "p");

// myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
// p(mostCommonChar(myStr) === "e");
