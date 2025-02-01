/*

Problem 20
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.
The array will always contain at least 3 numbers, and there will always be exactly one number that is different.
input: array
output: integer representing the number that is different in the input array
E:
D: object to contain the counts
A:
Create an object to get the counts
Iterate over the object
Return the key whose value that is equal to 1

*/

function whatIsDifferent(arr) {
  let count = {};

  arr.forEach((number) => {
    count[number] = (count[number] || 0) + 1;
  });

  for (let key in count) {
    if (count[key] === 1) {
      return Number(key);
    }
  }
}

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);
