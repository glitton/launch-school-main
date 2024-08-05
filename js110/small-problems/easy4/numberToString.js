/*
P - Write a function that converts a positive number to a string representation
of the same number

E - Examples/Test Cases
Explicit Rules: Can't use built in js methods, all numbers are positive
Implicit rules: no alpha numberic, no symbos, special chars

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

Input: integers
Output: string

D - Data Structure
String, Array

A - Algorithm
1.  Multiply string by 1.  This coerces the string to a number
2.  Return result

Code
*/

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";
  while (number > 0) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    // console.log(number);
    result = DIGITS[remainder] + result;
    console.log(result);
  }
  console.log(result);
}

// function integerToString(number) {
//   let result = "";

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

integerToString(4321); // "4321"
// integerToString(0); // "0"
// integerToString(5000); // "5000"
// integerToString(1234567890); // "1234567890"
