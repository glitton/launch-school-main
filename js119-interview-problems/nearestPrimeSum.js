/*
Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.
Notes:
●  The array will always contain at least 2 integers.
●  All values in the array must be positive (> 0).
●  There may be multiple occurrences of the various numbers in the array.
Input: array
output: integer that represents the value that needs to be added to the sum of array digits to get to the nearest prime number
Rules
- a prime number is a number that can be divided by one and itself only
E: 
D: 
A:
Initialize vars
- get sum of array, assign to arraySum
 - assign increment to arraySum
While true
  - add 1 to arraySum   
  - check if arraySum is a prime number
return arraySum - increment
*/

function nearestPrimeSum(arr) {
  let arraySum = arr.reduce((acc, curr) => acc + curr, 0);
  let increment = arraySum;
  while (true) {
    arraySum++;
    // console.log("s", arraySum);
    if (isPrime(arraySum)) break;
  }
  return arraySum - increment;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let idx = 2; idx * idx <= num; idx++) {
    if (num % idx === 0) return false;
  }
  return true;
}

// console.log(isPrime(6));
const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);

// The above tests should each print true.
