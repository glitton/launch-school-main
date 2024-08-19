/*
Problem: Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Examples/Test Cases: 
alphabeticNumberSort(
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Explicit Rules: 
- input is an array of integers between 0 and 19
- output is a sorted array based on the english word for each number
Implicit Rules:
- sort is descending from a to z

Data Structure:  Arrays, object???

Algorithm:
1.  Create an object constant containing the number as the key and the english word for each number
as the value
2.  Create an array based on the value of the object
3.  Sort the values alphabetically in descending order
4.  Retrieve the keys of the sorted array based on its value
4.  Return the keys as an array

Code

*/

const INTEGER_WORDS_OBJ = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};

function alphaNumSort() {
  let sortedKeys = Object.keys(INTEGER_WORDS_OBJ).sort();
  let sortedValues = sortedKeys.map((key) => INTEGER_WORDS_OBJ[key]);
  return sortedValues;
}

//Launch School solution

const NUMBER_WORDS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const sortWords = function (num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
};

function alphabeticNumberSort(array) {
  return [...array].sort(sortWords);
}
// console.log(
//   alphabeticNumberSort([
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//   ])
// );

console.log(
  alphaNumSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
