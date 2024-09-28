/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Understand the Problem:
Input: sentence string
Output: string with number words converted to its corresponding digit

Rules: 
- string consists of words separated by spaces
- No none alpha characters (it seems)

Examples/Test Cases (see below)

Data Structures: Array, String, numbers

Algorithm:
1.  Initialize variable to an object containing number words and its digits as key/value pairs
2.  Convert the sentence string to an array using split, separate by spaces
3.  Iterate over the sentence string
  - if sentence contains one of the number words, reassign that element to the index of the element which is equivalent to the digit
4.  Join the array and return the new string

Code:
*/

const NUM_WORDS = {
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
};
//This doesn't word with the word four because of the period.
function wordToDigit(sentence) {
  let sentenceArray = sentence.split(" ");
  let numWordsKeys = Object.keys(NUM_WORDS);

  // console.log(sentenceArray);

  let finalSentence = sentenceArray.map((word) => {
    if (numWordsKeys.includes(word)) {
      word = NUM_WORDS[word];
      return word;
    } else {
      return word;
    }
  });

  return finalSentence.join(" ");
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
