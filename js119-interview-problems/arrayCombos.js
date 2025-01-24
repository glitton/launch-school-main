/*
P: Write a function that takes an array of numbers and a target sum. 
The function should return all possible combinations of 2 elements from the array 
that add up to the target sum. Ensure that each combination is unique and only appears once in the result.
input: array, integer
output: array of arrays containing unique pairs that add up to the target sum
Rules - 
  - if no combo, return empty array
  - pair must be unique
E:
D:
A:
Initialize a result array
Iterate over the array using nested loops (2)
- if the sum of the pair is equal to the target sum, append to result
return result  
*/

function getCombinationsWithSum(arr, target) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        const pair = [arr[i], arr[j]].sort((a, b) => a - b);
        if (
          !result.some(
            (existingPair) =>
              existingPair[0] === pair[0] && existingPair[1] === pair[1]
          )
        ) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
  }
  return result;
}

// console.log(getCombinationsWithSum([1, 2, 2, 3, 4, 5], 5));
// // Expected Output: [[1, 4], [2, 3]]

// console.log(getCombinationsWithSum([1, 2, 3, 4, 5], 10));
// // // // Expected Output: [] (no combination adds up to 10)

// console.log(getCombinationsWithSum([-1, 0, 1, 2, -2], 0));
// // // Expected Output: [[-1, 1], [-2, 2]] (both combinations sum to 0)

/*
P: Create a function that accepts an array of strings and a minimum length. The function should return all combinations of 3 elements from the array, but only include combinations where each string is longer than the specified minimum length.
input: strings and integer
output: array of arrays
E:
D:
A:

Iterate over the array using a nested loop to get combinations of 3 elements
Check whether each string's length is greater than or equal to the min length
Append qualified strings to result
return result
*/

function getFilteredCombinations(array, minLength) {
  let result = [];

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (
          array[i].length >= minLength &&
          array[j].length >= minLength &&
          array[k].length >= minLength
        ) {
          result.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  return result;
}

// console.log(getFilteredCombinations(["apple", "banana", "kiwi", "fig"], 4));
// // Expected Output: [["apple", "banana", "kiwi"]] (only these are longer than 4)

// console.log(getFilteredCombinations(["hi", "hello", "hey", "welcome"], 5));
// // // Expected Output: []

// console.log(getFilteredCombinations(["cat", "dog", "rabbit", "elephant"], 3));
// // // Expected Output: [["cat", "dog", "rabbit"], ["cat", "dog", "elephant"], ...]

/*
P: Write a function that takes an array of objects, where each object has at least a name and a group property, and a number representing the required number of elements in each combination. The function should return all unique combinations of the specified number of elements from the array, ensuring that each combination contains at least one object from each unique group present in the input array.

input: array of objects and integer that specifies how many elements in each combination
output: array of array of objects
E:
D:
A:
Initialize a result array
Iterate over the array of objects
*/

const data1 = [
  { name: "Alice", group: "A" },
  { name: "Bob", group: "B" },
  { name: "Charlie", group: "A" },
  { name: "Diana", group: "B" },
  { name: "Eve", group: "C" },
];

console.log(getGroupedCombinations(data1, 3));
// Expected Output:
// [
//   [{ name: 'Alice', group: 'A' }, { name: 'Bob', group: 'B' }, { name: 'Eve', group: 'C' }],
//   [{ name: 'Alice', group: 'A' }, { name: 'Diana', group: 'B' }, { name: 'Eve', group: 'C' }],
//   [{ name: 'Charlie', group: 'A' }, { name: 'Bob', group: 'B' }, { name: 'Eve', group: 'C' }],
//   [{ name: 'Charlie', group: 'A' }, { name: 'Diana', group: 'B' }, { name: 'Eve', group: 'C' }],
//   ...
// ]
