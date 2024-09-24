/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

Problem:
Input: array
Output: a new array, original array is not mutated

Rules:
- If the input is not an array, return undefined
- If the input is an empty array, return an empty array []
- For a non-empty array, slice off the first element and append it to the end of the array

Examples/Test Cases:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Data Structures:
Input: array, array of objects, array of strings, array of arrays, strings and objects
Output: a new array

Algorithm:
1.  Check if the input is an array
  - if not, return undefined
  - if it is, go to step 2
2.  Check if the array is empty, length is equal to zero
  - if it is, return an empty array
  - if not, go to step 3
3.  Create a copy of the array without the first element using the slice method 
4.  Append the first element of the original array to the copy of the array using the push method 
which adds the element to the end of the array
5.  Return the array

Code

*/

function rotateArrayOG(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  let finalArray = arr.slice(1);
  finalArray.push(arr[0]);
  return finalArray;
}

//Launch School version

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

console.log(rotateArray(1));
console.log(rotateArray());
console.log(rotateArray([]));

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []
