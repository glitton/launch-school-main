/*
P: A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.
Input: integer
Output: integer

Rules: A featured number:
- odd number
- is a multiple of 7
- digits in the integer only occur once

NOTE: The largest possible featured number is 9876543201.

E: 
D: String
A: 
Initialize variables
- stringDigit - to check if each digit is unique
- currentNum = input number + 1

Iteration
- Use a while loop 
- check if currentNum is odd and a multiple of 7
  - if yes, convert num to a string and check if digits occur only once
    - if yes, return current 
  - if no, increment by 2 to get the next odd number
Return value  
- return current or error message    
*/

function featured(num) {
  let currentNum = num + 1;
  const LARGEST_NUM = 9876543201;

  while (currentNum <= LARGEST_NUM) {
    console.log("curr", currentNum);
    if (
      currentNum % 2 === 1 &&
      currentNum % 7 === 0 &&
      hasUniqueDigits(currentNum)
    ) {
      return currentNum;
    }
    currentNum += 2;
  }
  return "Error.  There is no possible number that fulfills those requirements.";
}

function hasUniqueDigits(num) {
  let uniqueNums = [];
  let stringDigit = String(num).split("");

  for (let digit of stringDigit) {
    if (uniqueNums.includes(digit)) {
      return false;
    }
    uniqueNums.push(digit);
  }
  return true;
}

console.log(hasUniqueDigits(1029));

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
// console.log(featured(997)); // 1029
// console.log(featured(1029)); // 1043
// console.log(featured(999999)); // 1023547
// console.log(featured(999999987)); // 1023456987
// console.log(featured(9876543186)); // 9876543201
// console.log(featured(9876543200)); // 9876543201
// console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
