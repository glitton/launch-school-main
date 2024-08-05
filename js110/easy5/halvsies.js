/*
Problem:
Write a function that takes an array as an argument and returns an array with two
sub-arrays.  The first sub-array takes the first half of the original array while the
second sub-array takes the second half of the original array. 

If the original array has an odd length, add the middle element to the first sub-array

Examples/Test Cases
Input: Array
Output: Single array containing two sub-arrays

Explicit Rules: If the array has an odd length, the middle element goes to the first
sub-array
Implicit Rules: Array contains integers
If original array is empty, return value is an array with two empty sub-arrays
If original array has one element, the return value is the main array with the first 
sub-array containing the single element, while the second sub-array is empty
- Can the original array be mutated?  I will for this case

Data Structure: Arrays

Algorithm:
1.  Declare two array variables: firstSubArray, secondSubArray
2.  If array length is zero, return main array with both empty subarrays
2.  Check if array length is even.  If even: 
    - Slice the array using the length/2 as the end of the 1st subArray
    - Slice the second half of the array using the length/2 + 1 as the index for the 
    second sub array
3.  If array length is odd:
  - check if array length is one.  Return 1st sub array with the lone element and second subarray empty
  If array length > 1
  - Slice the array using Math.floor(array.length/2) for the 1st sub array
  - Slice the array using Math.ceil(array.length/2) for the 2nd sub array
    

*/

// console.log(Math.ceil([1, 5, 2, 4, 3, 10, 9].length / 2));
// function halvsies(array) {
//   let subArray1 = [];
//   let subArray2 = [];
//   if (array.length === 0) {
//     array = [subArray1, subArray2];
//   }

//   if (array.length % 2 === 0) {
//     subArray1 = array.slice(0, array.length / 2);
//     subArray2 = array.slice(array.length / 2);
//     array = [subArray1, subArray2];
//   } else if (array.length === 1) {
//     subArray1 = array[0];
//     array = [subArray1, subArray2];
//   } else {
//     subArray1 = array.slice(0, Math.ceil(array.length / 2));
//     subArray2 = array.slice(Math.ceil(array.length / 2));

//     array = [subArray1, subArray2];
//   }
//   console.log(array);

//   return array;
// }

//Launch School shorter

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let subArray1 = array.slice(0, half);
  let subArray2 = array.slice(half);
  return [subArray1, subArray2];
}

console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([]));
