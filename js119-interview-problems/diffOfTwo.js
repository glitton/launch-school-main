/*Difference of Two
P: The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.
Input: Array
Output: Array of array pairs that have a diff of two
Rules:
- result array needs to be sorted in ascending order
E:
D: Arrays
A:
Initialize result to empty array
Iterate over input pair using a nested loop
  - check the difference of each pair
  - append the sorted pair with a diff of two to the result array
- return the result array sorted  
*/

function differenceOfTwo(arr) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === 2) {
        result.push([arr[i], arr[j]].sort());
      }
    }
  }
  return result.sort();
}
// Test cases
console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// // // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// // //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// // // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []
