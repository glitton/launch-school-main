/*
P: Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.
input: array
output: array containing 2 numbers that have the smallest difference
E:
D:
A:
Variables:
  - currentDifference = 0
  - smallestDifference = Infinity
  - result array = []
Iterate over the array using a nested loop to compare two numbers
  i goes from 0 to length - 1
  j goes from i + 1 to length
  if currentDifference is less than smallestDifference 
  reassign and reset
    - smallestDifference = currentDifference
    - reassign elements at index i and j to result
    - reset currentDifference to 0
    
Return result    

*/

function closestNumbers(arr) {
  let smallestDifference = Infinity;
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let currentDifference = 0;
      currentDifference = Math.abs(arr[i] - arr[j]);
      if (currentDifference < smallestDifference) {
        smallestDifference = currentDifference;
        result[0] = arr[i];
        result[1] = arr[j];
      }
    }
  }
  return result;
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
