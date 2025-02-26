/* 
P: Given an array of numbers, return all pairs whose sum is odd. Return an empty array if no such pairs exist. -- Generosa
input: array
output: array of arrays containing odd pairs
rules:
- if no odd pair exists, return an empty array

E:

D: arrays

A: 
Initialize a result empty array
Iterate over the input array using a nested loop to get pairs
  - check if the pairs sum is odd
  - append pair to result
return result  
 */

function oddSumPairs(arr) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % 2 === 1) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
// Test cases
console.log(oddSumPairs([1, 2, 3, 4])); // [[1, 2], [1, 4], [2, 3], [3, 4]]
console.log(oddSumPairs([2, 4, 6, 8])); // []
console.log(oddSumPairs([1, 3, 5])); // []
console.log(oddSumPairs([10, 11])); // [[10, 11]]
