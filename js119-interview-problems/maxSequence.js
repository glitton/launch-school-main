/*
P:The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

 maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
 If the array is made up of only negative numbers, return 0 instead.
 input: array
 output: integer
 E:
 D: input array, integer, no additional
 A:
 Initialize vars
 - currSum = 0
 - maxSum = - Infinity
 - if array is empty or contains negative numbers return 0
 - if array has only one number, return that number
 - Iterate over array using a nested loop
 - add up elements
  - if currSum is greater than maxSum
  - reassign maxSum to currSum
return maxSum  
 */

function maxSequence(arr) {
  let currSum = 0;
  let maxSum = -Infinity;

  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      // console.log({i}, {j})
      let currentSequence = arr.slice(i, j);
      console.log(currentSequence);
    }
  }

  // console.log(maxSum);
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // true
// // Test Cases
// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([-32]) === 0); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

function maxSequence(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      let currentSequence = arr.slice(i, j);
      // console.log(currentSequence)
      let sumOfCurrentSequence = sum(currentSequence);
      if (sumOfCurrentSequence > maxSum) maxSum = sumOfCurrentSequence;
    }
  }
  return maxSum;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}
