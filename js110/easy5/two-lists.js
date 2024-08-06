/*
Problem: Write a function that combines two arrays passed as arguments and
returns a new array that contains all elements from both arrays with each element
positioned alternatively.

Examples/Test Cases:
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

Input: Two Arrays
Output: Single array containing elements from both arrays positioned alternatively

Explicit Rules: 
- Arrays are not empty
- Arrays have equal number of elements

Data Structure: Arrays, Strings

Algorithm:
1.  Initialize a variable set to an empty array that will hold the combined elements
2.  Iterate over the length of any of the arrays
3.  Push the element at the 0 index of arr1 and then do the same for arr2
4. Return the combined array

Code

*/

// function interleave(arr1, arr2) {
//   let combinedArray = [];

//   for (let idx = 0; idx < arr1.length; idx += 1) {
//     combinedArray.push(arr1[idx], arr2[idx]);
//   }
//   return combinedArray;
// }

// function interleave(arr1, arr2) {
//   let combinedArray = [];
//   arr1.forEach((element) =>
//     combinedArray.push(element, arr2[arr1.indexOf(element)])
//   );
//   return combinedArray;
// }

function interleave(arr1, arr2) {
  let combinedArray = [];
  arr1.map((element) =>
    combinedArray.push(element, arr2[arr1.indexOf(element)])
  );
  return combinedArray;
}
console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
