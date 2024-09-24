/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Understand the Problem:
Input: two numbers, the original number and the last count digits to rotate
Output: the rotated number

Rules:
- Rotate the last count of the original number
- Leave the digits that aren't part of the count in the same order
- Slice off the first of the digits that need to rotate, append it to the end of the number
- Join the first digit with the last count rotated digits and return it as a number

Examples/Test Cases (see below)

Data Structure: Strings

Algorithm:
1.  Convert the number to a string
2.  split the string into two parts: the part to remain unchanged and the part to be rotated
3. rotate the second part
4. join the first part back together with the rotated second part
5. convert the string to a number and return it

Code:

*/

function rotateRightmostDigitsMine(digits, count) {
  let stringDigits = String(digits);

  let stringEndIdx = stringDigits.length - count;
  let unchangedString = stringDigits.slice(0, stringEndIdx);
  let rotatedString = stringDigits.slice(stringEndIdx);

  rotatedString = rotatedString.slice(1).concat(rotatedString[0]);

  let finalRotatedValue = unchangedString.concat(rotatedString);

  return Number(finalRotatedValue);
}

//Launch School Version

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

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
