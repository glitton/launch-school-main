/*
Problem: Given a string of words separated by spaces, write a function that 
swaps the first and last letters of every word

Examples/Test Cases
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Explicit Rules: 
- Every word contains at least one letter
- String will always contain one word
- No leading, trailing, or repeated spaces
- No special characters, each string contains only words and spaces

Implicit Rules: No numbers or special characters

Data Structure:
Input: string 
Output: string
Intermediate: array?

Algorithm:
1.  Convert the string to an array of words
2.  Create a result variable that will store the final string with swapped letters
3.  Iterate over the array
    - Check if the word length is less than 2.  
       - If yes, add it to the result
       - If not, meaning it is >=2, 
            - assign the first letter to a variable
            - store the remaining to another variable using substring(0)
            - 
        - create a tempWord variable to store the swapped letters and word
        - Reassign the last element of the word to the first element and vice versa
        - Concatenate the middle portion with the newly-swapped first and last elements
        - Add this new swapped word to result
4.  Return result

Code
*/

function swap(words) {
  let wordsArray = words.split(" ");
  // let result = [];  //launch school version doesn't use this

  // for (let idx = 0; idx < wordsArray.length; idx++) {
  //   let currentWord = wordsArray[idx];
  //   if (currentWord.length < 2) {
  //     result.push(currentWord);
  //     // console.log(result);
  //   } else {
  //     let swappedWord = swapFirstLastLetters(currentWord);
  //     result.push(swappedWord);
  //   }
  // }
  //launch school version
  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastLetters(wordsArray[idx]);
  }

  return wordsArray.join(" ");
}

function swapFirstLastLetters(word) {
  //launch school version
  if (word.length === 1) {
    return word;
  }
  let firstLetter = word[0];
  let lastLetter = word[word.length - 1];
  return lastLetter + word.slice(1, -1) + firstLetter;
}

console.log(swap("Oh what a wonderful day it is"));
console.log(swap("Abcde"));
console.log(swap("a"));
// console.log(swapFirstLastLetters("wonderful"));
// swap("");
