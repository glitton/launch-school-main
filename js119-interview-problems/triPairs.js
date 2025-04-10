/*
P: Given 2 two arguments of an array of numbers and a number, find all the pairs that results in the forming a triangle with the number.

Note: To determine if three numbers form a triangle you have to use the Triangle Inequality Theorem, which states that the sum of two side lengths of a triangle is always greater than the third side. If this is true for all three combinations of added side lengths, then you will have a triangle.

input: array
output: array of arrays where each sub-array represent a pair that when added to the input number forms a valid triangle
rules:
- a valid triangle is where the sum of two sides is always greater than the third side

E: 

D: arrays

A:
Initialize a trianglePairs empty array
Iterate over the input array using a nested loop
  - Get a pair and check if it is a valid triangle with the third number (helper function)
    - yes, add to trianglePairs array
Return trianglePairs 

isValidTriangle HELPER FUNCTION
- input is side1, side2, side3
- check if the following sums are all true
  - side1 + side2 > side 3    
  - side1 + side3 > side2
  - side2 + side3 > side1
*/

function findTrianglePairs(sidesArray, side3) {
  for (let i = 0; (i = sidesArray.length - 1); i++) {
    for (let j = i + 1; j < sidesArray.length; j++) {
      let side1 = sidesArray[i];
      let side2 = sidesArray[j];
      console.log({ i }, { j });
    }
  }
}

console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]
// console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []
// console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]
// console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]
