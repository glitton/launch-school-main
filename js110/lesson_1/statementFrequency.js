/*
PROBLEM
Create an object that expresses the frequency with which each letter occurs in this string:
let statement = "The Flintstones Rock";

Input: string
Output: object where the key is the letter in the string and the value is the frequency in which each letter occurs in the string

Rules: Case sensitive.  T is one, t is one

Examples/Test Cases
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }

Data Structure:
Input - string
Output - object

Algorithm:
1.  Remove spaces from the string and convert the string to an array where each letter is an element of the array
2.  Create an empty object that will hold the key/value pairs
3.  Create a count variable to keep track of the letter frequency.  Set it to 1
3.  Iterate over the array.  For the first and subsequent letters:
  a. Iterate through the rest of the array and keep track of the next occurrence of this letter.
  b. if it doesn't exist, add the letter as the key and the counter number one as the value
  c. if it exists later on, increment the counter, continue until this letter doesn't occur anymore
  d. add the letter as the key and the counter number as the value
4. Reset counter to one
5.  Repeat step 3 until the end of the array
6.  Return the object with the letter as keys and its number of occurrences as the value

Code:
*/
let statement = "The Flintstones Rock";
let charactersArray = statement.split("").filter((char) => char !== " ");
// console.log(charactersArray);
let result = {};

for (let idx = 0; idx < charactersArray.length; idx++) {
  // console.log(idx);
  let currentCharacter = charactersArray[idx];
  // console.log(currentCharacter);
  if (Object.keys(result).includes(currentCharacter)) {
    result[currentCharacter] += 1;
  } else {
    result[currentCharacter] = 1;
  }
}
console.log(result);
