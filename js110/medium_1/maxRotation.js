/*
Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

MY VERSION _ NOT COMPLETE
Understand the Problem:
Input: Digits
Output: New digits rotated by the index which is length - 2
For ex. if there are 6 digits, length is 6, rotate the digits up to index 4, or five times

Rules:
If final digits have a leading zero, drop it

Examples/Test Cases (see below):

Data Structure:
Input: Number
Output: Number
Intermediate: String

Algorithm:
1.  Create an index variable, initialize to zero
2.  Create a while loop where the condition is the count is rotateRightmostDigits up to index - 1
3.  Return rotated Digits


*/

// function maxRotation(digits) {
//   let index = 0;
//   let digitsString = Number(digits);

//   while (index < digitsString.length - 1) {
//     let maxRotatedString = rotateRightmostDigits(digits, index);
//     index++;
//   }
//   return Number(maxRotatedString);
// }

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let stringEndIdx = numberString.length - count;

  let firstPart = numberString.slice(0, stringEndIdx);
  let secondPart = numberString.slice(stringEndIdx);

  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(str) {
  return str.slice(1).concat(str[0]);
}

//Based on Launch School solution
function maxRotation(number) {
  let numberDigits = String(number).length; //count
  let count = numberDigits;

  while (count >= 2) {
    number = rotateRightmostDigits(number, count);
    count--;
  }
  return number;
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845

// console.log(rotateRightmostDigits(735291, 6));

//Launch School Version
function maxRotationLS(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}
