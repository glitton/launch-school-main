/* 

Problem 18
Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.
If you are given an array with multiple answers, return the index with the smallest value.
The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.
input: array
ouput: integer representing the index
rules:
- sum of the integers to the left of the index should equal the sum of the integer to the right of the index
- sum of int to the left of index 0 and the last element is 0
E:
D: input is an array, output is an integer
A:


Iterate over the array
  - Initialize a leftSum variable, assign to 0
  - Initialize a rightSum variable, assign to zero
  - get a leftSlice assign to index 0
  - get a rightSlice assign to index 1 
  - compare the sums
    if leftSlice === rightSlice
return index    

*/

function equalSumIndex(arr) {
  let leftSliceSum = 0;
  let rightSliceSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSliceSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
    rightSliceSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
    if (leftSliceSum === rightSliceSum) {
      return i;
    }
  }
  return -1;
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
// p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
