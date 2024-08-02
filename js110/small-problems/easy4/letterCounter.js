/*
Problem: Write a function that takes a string argument that has zero or more words
separated by a space and returns an object that has the number of characters per word
as the key, and the number of times these keys occur as values.  

Examples/Test Cases: 
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Explicit Rules: punctuation counts as characters
Implicit Rules: No integers, only strings

Data Structures:
Input: Strings
Output: object
Intermediate: Array???

Algorithm:
1.  Convert string to array of words store in a variable.  
Words that have punctuation will be part of the word.
2.  Initialize an empty object to accept the result
3.  Iterate over the array.  
4.  Initialize a wordSize variable to the length of the word at the current index
5.  Check if the word size is 0, if so, the array has a space, so continue
6.  Check if the object key doesn't exist yet in the result object, 
  - If it doesn't exists add it to the object, set its value to 0
  - If the object key exists, increment its value by 1
8.  Return the result object

Code

*/

function wordSizes(words) {
  let wordsArray = words.split(" ");
  let result = {};

  for (let idx = 0; idx < wordsArray.length; idx++) {
    let wordSize = wordsArray[idx].length;

    if (wordSize === 0) {
      continue;
    }

    if (!result[wordSize]) {
      result[wordSize] = 0;
      // console.log(result);
    } else {
      result[wordSize] += 1;
    }
  }
  return result;
}

// function wordSizes(words) {
//   let wordsArray = words.split(" ");
//   let count = {};

//   for (let idx = 0; idx < wordsArray.length; idx += 1) {
//     let wordSize = wordsArray[idx].length;
//     if (wordSize === 0) {
//       continue;
//     }

//     if (!count[wordSize]) {
//       count[wordSize] = 0;
//     }
//     count[wordSize] += 1;
//   }

//   return count;
// }

console.log(wordSizes("Four score and seven."));
