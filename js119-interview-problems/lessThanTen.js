// Given an array of integers, write a function that
// will determine and return the number of subarrays of
// consecutive elements in the array such that each
// subarray sums to less than 10. If no subarrays
// sum to less than 10, return -1.

/*
input: array
output: int
rules:
- return the number of subarrays (length 1) that have consec element and add up to less than 10 (up to 9)
- if none exist, return -1
- subarray is length of 1 to length of the array

E: [1, 4, 5, 2]  [1],[4],[5],[2] => 4
[1,4][4,5][5,2] => 3

[2, 7, 3, 5, 1] => 5 + 1 + 1 + 1 + 1 => 8

[6, 2, 6, 5, 1, 2] => 6,1,1,1,1,1 => 11

[6, 2, 6, 5, 1, 2] length is 6

D: array, int

A:
Var: subArrayCount = 0
sliceEnd = 0
// Iterate over the input array increments 1, 2, 3 length of array using a nested loop
// - inc 1 = is currNum is less than 10
//   - increment subArrayCount by 1


While loop: while sliceEnd is less than or equal to the length of the array + 1
  // - formula: (number of elements times (length plus 1)) /2
Iterate with for loop
- get subarrays by slicing by idx, idx + sliceEnd
  - check if sum of subarray is less than 10
    - yes: increment subArrayCount by 1
    - no: continue
  inc sliceEnd by 1  
return subArrayCount


[6, 2, 6, 5, 1, 2] 
sliceEnd = 0 => 1
slice1 = idx, idx + sliceEnd 0, 0
[1, 1, 1, 2] = 4 * 5 / 2

[1, 4, 5, 2]) === 7 sliceEnd = 5

while (sliceEnd <= arr.length)
sliceEnd = 1
slice = 0, 1
*/

// function lessThanTen(numbers) {
//   let count = 0;
//   let sliceEnd = 1;
//   let segmentSum = 0;

//   while (sliceEnd < numbers.length) {
//     for (let idx = 0; idx < numbers.length; idx++) {
//       let segment = numbers.slice(idx, idx + sliceEnd);
//       if (segment.length < sliceEnd) {
//         continue;
//       } else {
//         segmentSum = segment.reduce((acc, curr) => acc + curr, 0);
//       }

//       if (segmentSum < 10) {
//         count++;
//       }
//     }
//     sliceEnd++;
//   }

//   if (count === 0) return -1;
//   return count;
// }

/*
Get all subarrays
Filter subarrays: 
  get those with sum less than 10
  if subarray less than 10 length is 0, return -1
return length of lessThanTen  

*/

// All test cases should print true

// function () {
//   subarrays = get_all_subarrays()
//   less_than_10 = subarrays.filter(....)
//   if (less_than_10.length === 0) return -1
//   return less_than_10_length
// }

function getSubarrays(arr) {
  let segments = [];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let segment = arr.slice(i, j);
      segments.push(segment);
    }
  }
  return segments;
}

function lessThanTen(numbers) {
  let subarrays = getSubarrays(numbers);
  let subarraySums = subarrays.map((arr) => {
    return arr.reduce((acc, curr) => acc + curr);
  });

  let sumsLessThanTen = subarraySums.filter((sum) => sum < 10);

  if (sumsLessThanTen.length === 0) return -1;

  return sumsLessThanTen.length;
}

let p = console.log; // p is an alias for console.log
// p(getSubarrays([1, 4, 5, 2]));
p(lessThanTen([1, 4, 5, 2]) === 7);
p(lessThanTen([10]) === -1);
p(lessThanTen([10, 9]) === 1);
p(lessThanTen([2, 7, 3, 5, 1]) === 9);
p(lessThanTen([5, 5, 5, 5, 5]) === 5);
p(lessThanTen([6, 2, 6, 5, 1, 2]) === 11);
