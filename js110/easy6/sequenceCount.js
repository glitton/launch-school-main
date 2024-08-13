/*
Problem: Create a function that takes two integers as arguments. 
The first argument is a count, and the second is the starting number of a 
sequence that your function will create. The function should return an array 
containing the same number of elements as the count argument. The value of each 
element should be a multiple of the starting number. 

Examples/Test Cases
Input: 
- 2 arguments:
  - Count which is integer representing the number of elements
  - Starting number of the sequence.
Output:  Array containing count number of elements.  The first element is the
starting number, the next elements are multiples of the starting number

Explicit Rules:  Count is an integer >=0.  If count is 0, array is empty
Implicit Rules: Array of integers

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

Data Structures:  Integers, Array

Algorithm:
1.  Create a variable that is assigned to an empty array
2.  Check if count is zero, return an empty array.  If not
3.  Create a loop that iterates as many times as count
4.  Push the starting number to the array
5.  Assign the starting number to a multiple variable
6.  Increment the multiple variable by the starting number
7.  Push the multiple variable to the array
8.  Repeat steps 5 to 7 until the end of the loop
9.  Return the array

Code

*/

// function sequence(count, startingNumber) {
//   let countNumbers = [];
//   let multiple = startingNumber;

//   if (count === 0) return countNumbers;

//   for (idx = 0; idx < count; idx++) {
//     countNumbers.push(multiple);
//     multiple += startingNumber;
//   }
//   return countNumbers;
// }

//Launch School version

function sequence(count, startNum) {
  let result = [];
  for (let num = 1; num <= count; num++) {
    result.push(num * startNum);
  }
  return result;
}

// console.log(sequence(0, 1000000));
console.log(sequence(4, -7));
console.log(sequence(5, 1));
console.log(sequence(3, 0));
console.log(sequence(0, 10000000));
