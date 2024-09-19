/*
Problem:
Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.

Examples/Test Cases:
Explicit Rules:
Input: String
Output: Array of the word followed by a space and the word's length
- Empty string returns an empty array

Implicit Rules:
- Punctuation is part of the string length

Data Structures:
Input: String
Output: Array
Intermediate: Object (maybe???)

Algorithm:
1.  Convert the string to an array of words
2.  Iterate over the array and return the array where each element of the array 
is the word and its length, separated by a comma.
3.  Need to have guard rails for an empty string or no function arguments
*/

function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  let wordsArray = words.split(" ");
  return wordsArray.map((el) => `${el} ${el.length}`);
}

let log = console.log;

log(wordLengths("cow sheep chicken"));
// ["cow 3", "sheep 5", "chicken 7"]

log(wordLengths("baseball hot dogs and apple pie"));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

log(wordLengths("Supercalifragilisticexpialidocious"));
// // ["Supercalifragilisticexpialidocious 34"]

log(wordLengths("")); // []
log(wordLengths()); // []

// let emptyStr = "";
// console.log("empty", typeof emptyStr.length);

/*
Launch School versions

function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }

  return words.split(' ').map(function (word) {
    return word + ' ' + String(word.length);
  });
}

*/
