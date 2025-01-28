/*
P:The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:
 maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
 If the array is made up of only negative numbers, return 0 instead.
 input: array
 output: integer
 E:
 D: input array, integer representing the sum, array of subsequences
 A:
 
 Create a sum helper function
  - return sum of the array 

MAIN FUNCTION
- Initialize a maxSum variable assign to zero
- Iterate over the array using a nested loop
  - get a subsequence of numbers starting from index 0 and 1, index 0, 1, 2 ...
  - Get the sum of the subsequences
  - is currentSequence greater than maxSum, yes
    - reassign maxSum to currentSequence
 - return maxSum   
 */

function maxSequence(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      // console.log({ i }, { j });
      let currentSequence = arr.slice(i, j);
      let sumOfCurrentSequence = sum(currentSequence);
      if (sumOfCurrentSequence > maxSum) {
        maxSum = sumOfCurrentSequence;
      }
    }
  }
  return maxSum;
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // true
// // Test Cases
console.log(maxSequence([]) === 0); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true
