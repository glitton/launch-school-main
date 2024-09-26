/*
Aziza: 

Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.
*/

/*
Input: An array of numbers 
Output: A number (sum) 
Rules:
  -- The output should be a number which is the sum of all subsequence in the input array 
  -- IF the input array contains one number return it as-is

D:
--- Array 
--- Number 

A:
1. Iterate through the input array 
2. Get the sum of each subsequence from input array 

  --- Create sumOfSums function, with one param an array 
    --- Initialize sum to 0 
    --- Iterate through the input array 
      --- Get the current number 
      --- Add it to sum 
        --- Get the sum of all sums by adding them together 
      -- Assign the result to sum 

    -- Return sum 
*/

const log = console.log;

function sumOfSums(array) {
  let sum = 0;

  for (let idx = 1; idx <= array.length; idx += 1) {
    sum += array.slice(0, idx + 1);
    log(sum);
    // sum += array.slice(0, idx).reduce((sum, initialValue) => sum + initialValue);
  }

  // return sum;
}

log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]); // 4
// sumOfSums([1, 2, 3, 4, 5]); // 35
