/*
Problem:  Write a function that takes an array as an argument and reverses its
elements in place.

Examples/Test Cases
Explicit Rules:  
- Mutate the array
- Return value is the same array object
- Can't use reverse method
Implicit Rules:
- Empty array argument returns an empty array

Data Structures:  Arrays

Algorithm:
1.  Swap the first and last elements of the array
2.  Swap the second and second to last elements of the array
3.  Repeat until all elements are swapped

Code

*/

function reverseArray(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  return array;
}

// console.log(reverseArray([1, 2, 3, 4]));

let list = [1, 2, 3, 4];
let result = reverseArray(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true
