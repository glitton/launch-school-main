/*
P: Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.
input: array of numbers
output: integer representing the min sum of 5 consecutive elements
Rules:
- if array contains fewer than 5 elements, return null
- numbers must be consecutive
E:
D: array of integers, integer representing the sum
A:
Initialize variables
- minimumSum = Infinity
- currentSum = 0
If array's length is less than 5, return null
Iterate over the array to get 5 elements at a time
  - Add the numbers and assign to currentSum
  - if currentSum is less than minimumSum
  - reassign minimumSum to currentCum
Return minimumSum
*/

function minimumSum(arr) {
  let minSum = Infinity;

  if (arr.length < 5) return null;

  for (let idx = 0; idx < arr.length - 4; idx++) {
    let currentConsecutiveNums = arr.slice(idx, idx + 5);
    let currentSum = currentConsecutiveNums.reduce(
      (acc, curr) => acc + curr,
      0
    );
    if (currentSum < minSum) {
      minSum = currentSum;
    }
  }
  return minSum;
}

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
