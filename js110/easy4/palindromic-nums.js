// function isPalindromicNumber(num) {
//   let stringNum = num.toString();
//   // console.log(typeof stringNum);
//   let endIndex = stringNum.length - 1;
//   for (let startIndex = 0; startIndex < stringNum.length / 2; startIndex++) {
//     let currentString = stringNum[startIndex];
//     if (currentString !== stringNum[endIndex]) {
//       return false;
//     }
//     endIndex--;
//   }
//   return true;
// }

function isPalindromicNumber(num) {
  let stringNum = num.toString();
  let reversedStringNum = stringNum.split("").reverse().join("");
  return stringNum === reversedStringNum;
}
/*
P - Problem
1.  Write a function that returns true if the number argument reads the same 
forwards and backwards

E- Examples/Test Cases
Explicit Rules: 
- Numbers read the same forwards and backwards

Implicit:
- Characters are integers

D - Data Structure
Inputs: String
Output: Boolean
Intermediate: Array

A - Algorithm
1.  Convert numbers to strings
2.  Iterate over the string from a forward and backward direction
  - forward: iterate through length/2
  - backward: iterate starting from the end string.length -1 and decrement 
  the end index
2.  Check if the characters match
3.  Return false for the first character mismatch
4.  Return true if all characters match when the loop ends

Short version:
Convert number to a string, save to a variable
Use split reverse and join and save it to another variable
Compare both variables, return true if they are the same, false otherwise

C - Code

*/

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
