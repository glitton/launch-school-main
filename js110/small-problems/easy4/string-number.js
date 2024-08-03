/*
P - Write a function that takes a string of digits and returns them as integers

E - Examples/Test Cases
Rules: Can't use built in js methods
- No need to worry about invalid characters, all chars are numeric
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

Input: String
Output: Boolean

D - Data Structure
String, Array

A - Algorithm
1.  Multiply string by 1.  This coerces the string to a number
2.  Return result

Code
*/

function stringToInteger(string) {
  return string * 1;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570);
