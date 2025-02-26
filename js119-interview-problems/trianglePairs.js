/*Given 2 two arguments of an array of numbers and a number, find all the pairs that results in the forming a triangle with the number.

Note: To determine if three numbers form a triangle you have to use the Triangle Inequality Theorem, which states that the sum of two side lengths of a triangle is always greater than the third side. If this is true for all three combinations of added side lengths, then you will have a triangle.
Input: Array and number
Output: Array of array pairs that represent two sides of a triangle that work with the third side which is the number
Rules: 
- In order to be a triangle, the SUM of two sides must be GREATER than the third side
- If combination of sides do not satisfy the rule, return an empty array
E:
D: Array
A: 
Initialize a triangle array [] 
Iterate over the input array using a nested loop to get pairs
  - check if the sum of each pair combination is greater than the third side
    - if 
        side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
    - add pair to triangle array
return triangle array    
*/

function findTrianglePairs(arr, side3) {
  let triangleArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let side1 = arr[i];
      let side2 = arr[j];

      if (
        side1 + side2 > side3 &&
        side1 + side3 > side2 &&
        side2 + side3 > side1
      ) {
        triangleArr.push([arr[i], arr[j]]);
      }
    }
  }
  return triangleArr;
}

console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]
console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []
console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]
console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]
