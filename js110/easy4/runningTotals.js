/*
P - Problem
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

E- Examples/Test Cases
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

Input: Array
Output: Array

Rules:
Explicit - elements of the array are integers
Implicit - no strings

D- Data Structure - Arrays

A - Algorithm
1.  Initialize a variable, runningTotal set to 1st element of the array.  
2.  Create an array, total, and store runningTotal
3.  Iterate over the array starting from index 1
4.  ADd the element at the current index to running total


C-Code
*/

// function runningTotal(arr) {
//   let runningTotal = arr[0];
//   let total = [runningTotal];

//   for (let idx = 1; idx < arr.length; idx++) {
//     let currentElement = arr[idx];
//     runningTotal += currentElement;
//     total.push(runningTotal);
//   }
//   return total;
// }

function runningTotal(arr) {
  let resultArray = [];
  let sum = 0;

  arr.map((num) => resultArray.push((sum += num)));
  return resultArray;
}

//console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
//console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
//console.log(runningTotal([3])); // [3]
console.log(runningTotal([]));
