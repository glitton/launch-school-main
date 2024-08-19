/*
Algorithm:
1.  Create a nested for loop
2.  The outer loop iterates the length of the array 1
3.  The inner loop iterates the length of the 2nd array

*/

function multiplyAllPairs(arr1, arr2) {
  let sortedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      sortedArray.push(arr1[i] * arr2[j]);
    }
  }
  return sortedArray.sort((a, b) => a - b);
}

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]

//Launch School version

function multiplyPairs(arr1, arr2) {
  let result = [];

  arr1.forEach((num1) => {
    arr2.forEach((num2) => {
      result.push(num1 * num2);
    });
  });
  return result.sort((a, b) => a - b);
}

console.log(multiplyPairs([2, 4], [4, 3, 1, 2]));
