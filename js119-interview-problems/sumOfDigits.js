/*
P: Write a function that takes an array of numbers and returns a new array where each number is replaced by the sum of its digits.
Example:
Input: [123, 45, 678];
Output: [6, 9, 21];
D: String
A:
Initialize vars
- strSum = 0
Iteration
- Iterate over input string
  - for every number, convert it to a string and split it to get every character
  - get the sum of every character as a number
- return the new array  

*/

let arr = [123, 45, 678];
let sum = arr.map((num) => {
  return String(num)
    .split("")
    .map((arr) => 
      arr.map(el) );
    });
);

console.log(sum);
