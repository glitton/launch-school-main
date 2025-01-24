/* 
P: Given an array of numbers, return true if at least 3 sets of 3 consecutive numbers 
are increasing order.
input: array
output: boolean
rules
  - eac set of 3 must all be increasing to return true
E:
D: 
A:
Variables
  - count to keep track of how many sets of 3 nums are increasing  
Iterate over the array 
  - get the first 3 numbers starting index 0
  - compare the numbers, if they are increasing, increment count
  - when count is 3 return true
return false  
C:
*/

function threeIncreasingSets(arr) {
  let count = 0;
  let idx = 0;

  while (idx < arr.length - 2) {
    if (arr[idx] < arr[idx + 1] && arr[idx + 1] < arr[idx + 2]) {
      count++;

      if (count === 3) {
        return true;
      }
      idx++;
    } else {
      count = 0;
      idx++;
    }
  }
  if (count === 3) {
    return true;
  }
  return false;
}
// Test cases:
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false
