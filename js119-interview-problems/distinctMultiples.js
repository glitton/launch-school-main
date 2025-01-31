/*
Problem 16
Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.
input: string
output: integer
Rules
- case-insensitive
- distinct multiples (alpha and digits) are those that occur more than once
- return the count of distinct multiples
E:
D: Object to count occurrences
A:
Initialize an empty object, charCount
Iterate over the string
  - transform each char to lower case
  - populate the object with the character as the key and the number of times it occurs as the value
Get an array of the values
Filter the array for values that are greater than 2
Return the length of the array which represents the count of distinct multiples
*/

function distinctMultiples(str) {
  let characterCount = {};

  for (let idx = 0; idx < str.length; idx++) {
    let currentCharacter = str.toLowerCase()[idx];
    characterCount[currentCharacter] =
      (characterCount[currentCharacter] || 0) + 1;
  }

  let characterValues = Object.values(characterCount);
  return characterValues.filter((num) => num >= 2).length;
}
const p = console.log;
p(distinctMultiples("xyz") === 0); // (none)
p(distinctMultiples("xxyypzzr") === 3); // x, y, z
p(distinctMultiples("xXyYpzZr") === 3); // x, y, z
p(distinctMultiples("unununium") === 2); // u, n
p(distinctMultiples("multiplicity") === 3); // l, t, i
p(distinctMultiples("7657") === 1); // 7
p(distinctMultiples("3141592653589793") === 4); // 3, 1, 5, 9
p(distinctMultiples("2718281828459045") === 5); // 2, 1, 8, 4, 5
