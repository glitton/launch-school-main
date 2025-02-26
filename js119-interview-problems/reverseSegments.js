/* 
P: Given an array of numbers and a segment length k, reverse every consecutive segment of k elements. If the last segment is shorter than k, leave it unchanged. 
input: array and integer
output: array containing the reverse elements of length k

E:

D: array

A:
Initialize an empty reverse array 
Iterate over the input array
- get a slice up to k, reverse it and append to reverse
return reverse
*/

function reverseSegments(arr, length) {
  let reverseArray = [];
  if (length > arr.length) return arr;

  for (let idx = 0; idx < arr.length; idx += length) {
    let segmentReverse = arr.slice(idx, idx + length).reverse();
    reverseArray.push(...segmentReverse);
  }
  return reverseArray;
}
// Test cases
console.log(reverseSegments([1, 2, 3, 4, 5, 6], 3)); // [3, 2, 1, 6, 5, 4]
console.log(reverseSegments([1, 2, 3, 4, 5], 2)); // [2, 1, 4, 3, 5]
console.log(reverseSegments([7, 8, 9], 4)); // [7, 8, 9]
console.log(reverseSegments([1, 2, 3, 4], 2)); // [2, 1, 4, 3]
