/* 
P: Create a function called sumOfVowelPairs that takes a sentence and returns the total sum of the lengths of all word pairs where both words start with a vowel (a, e, i, o, u). 
Input: string
Output: Integer representing the total sum of the lengths of word pairs where both words start with a vowel
Rules:
- spaces do not count
- case-insensitive
E:
D: Array
A:
Initialize variables
- finalString = ''
- VOWELS = 'aeiouAEIOU'
Convert string to an array of words
Iteration to get pairs
- Iterate over the array, 
  - outer loop starts at index 0 to length -1
  - inner loop starts at index + 1
- Check pairs
  - check for vowel pairs
  - Append pairs as strings to finalString
- return finalString.length
*/

function sumOfVowelPairs(str) {
  const VOWELS = "aeiouAEIOU";
  let finalString = "";
  let strArray = str.split(" ");

  for (let i = 0; i < strArray.length - 1; i++) {
    for (let j = i + 1; j < strArray.length; j++) {
      if (VOWELS.includes(strArray[i][0]) && VOWELS.includes(strArray[j][0])) {
        finalString += strArray[i] + strArray[j];
      }
    }
  }
  return finalString.length;
}
// Test cases
console.log(sumOfVowelPairs("An apple a day keeps the doctor away"));
/*
An apple
An a
An away
apple a
apple away
a away
36
*/

console.log(sumOfVowelPairs("Every engineer enjoys innovative algorithms"));
/*
Every engineer
Every enjoys
Every innovative
Every algorithms
engineer enjoys
engineer innovative
engineer algorithms
enjoys innovative
enjoys algorithms
innovative algorithms
156
*/
