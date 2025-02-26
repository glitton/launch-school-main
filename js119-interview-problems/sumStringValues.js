/*
P: You are given an array of strings and want to find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.
Consider your entire array. What is the sum of all of the numeric values?
input: array of strings
output: integer rep the sum 
rules:
- numberic value is found by combining the first digit and the last digit in the string
- if there is only one digit, it is both the first and the last

E: 

D: array and strings, number

A:

Create a helper function that gets all the digits
  - Initialize a `DIGITS` constant assign to '0123456789'
  - Initialize a `stringNumbers` empty array
  - Iterate over the string
  - if `char` is included in digits array, append it to `stringNumbers` array
return `stringNumbers`

MAIN FUNCTION
Initialize a `finalSum` var assign to 0
Iterate over `stringNumbers` 
  - if length is equal greater than 0
    - assign firstNum to index 0
    - assign lastNum to last index
    - create twoDigitNumber
    - increment to finalSum
return `finalSum`  
*/

function getDigits(str) {
  const DIGITS = `0123456789`;
  let stringNumbers = [];

  str.split("").forEach((char) => {
    if (DIGITS.includes(char)) {
      stringNumbers.push(char);
    }
  });
  return stringNumbers;
}

function sumStringValues(arr) {
  let finalSum = 0;

  arr.forEach((str) => {
    let numbers = getDigits(str);

    if (numbers.length > 0) {
      let firstNum = numbers[0];
      let lastNum = numbers[numbers.length - 1];

      let twoDigitNumber = firstNum + lastNum;
      finalSum += Number(twoDigitNumber);
    }
  });
  return finalSum;
}

console.log(
  sumStringValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
); // 142 =>  12 + 38 + 25 + 77

console.log(
  sumStringValues([
    "ninesixthree8six8",
    "5tnzrrzmcsnfivefeightrjninexrhnnfbcb",
    "dcjcj2",
    "4fhcmhdtfourlzdphfxvlmvm6",
  ])
); // 211: 88 + 55 + 22 + 46
