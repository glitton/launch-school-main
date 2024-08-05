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
The tricky part of the solution is the "math" for getting the numbers digit by digit. 
1. The solution gets the rightmost digit (a one's digit) by getting the remainder 
of dividing the number by 10. For instance, 4321 % 10 returns 1. 
2. The solution then chops off the rightmost digit to get the next number by 
reassigning number to the result of Math.floor(number / 10). 
3.  Consequently, the result string is incrementally built by prepending the 
looked-up value, using the remainder as the index, to the previous value of result. 
4.  This process repeats until the value of number becomes 0.

Code
*/

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let result = "";
  if (number === 0) {
    result = DIGITS[0];
  }
  while (number > 0) {
    let remainder = number % 10; //step 1
    // console.log("remainder", remainder);
    number = Math.floor(number / 10); //step 2
    // console.log("number", number);
    result = DIGITS[remainder] + result;
    // console.log("result", result);
  }

  return result;
}

//Launch School version
// function integerToString(number) {
//   let result = "";

//   do {
//     let remainder = number % 10;
//     number = Math.floor(number / 10);

//     result = DIGITS[remainder] + result;
//   } while (number > 0);

//   return result;
// }

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
