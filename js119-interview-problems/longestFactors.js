/* 12. 
P: Write a function that returns the longest consecutive numbers that are factors of the given target number.
input: array and integer
output: array
E: 
D:
A:
Initialize vars
  - currentNumbers = []
  - longestNumbers = []
Iterate over the array
  - check if currentNum is a factor of targetNum
    - append to currentNumbers array
  if NOT  
  if currentNumbers is longer than longestNumbers
    longestNumbers = currentNumbers
    reset currentNumbers to empty array 
  end of loop
    - check lengths  
Return longestNumbers  
 */

function longestConsecutiveFactors(arr, targetNum) {
  let currentNums = [];
  let longestNums = [];

  for (let idx = 0; idx < arr.length; idx++) {
    if (targetNum % arr[idx] === 0) {
      currentNums.push(arr[idx]);
    } else {
      if (currentNums.length > longestNums.length) {
        longestNums = currentNums;
      }
      currentNums = [];
    }
  }
  if (currentNums.length > longestNums.length) {
    longestNums = currentNums;
  }
  return longestNums;
}

// Test cases
console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]//
