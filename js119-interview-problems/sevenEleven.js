/*
P: Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.
For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.
If the argument is negative, return 0.
input: integer
output: integer that represents the same of all multiples of 7 or 11
E:
D: integers
A:
Initialize a sum variable assign to 0
Loop through the number from 1 to one less than the input integer
  - check if the input is a multiple of 7 or 11 using the modulo operator
  - Add the multiples to the sum
 
Return sum
*/

function sevenEleven(number) {
  let sum = 0;
  if (number <= 0) return 0;

  for (let i = 1; i < number; i++) {
    if (i % 7 === 0 || i % 11 === 0) {
      sum += i;
    }
  }
  return sum;
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);
