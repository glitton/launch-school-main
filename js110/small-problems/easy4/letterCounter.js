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
  - Then increment its value by 1
8.  Return the result object

Code

Condition Check (if (!count[wordSize])):

This condition checks if count[wordSize] is falsy (i.e., undefined, null, 0, false, "", or any other falsy value).
If count[wordSize] is falsy, the code inside the if block sets count[wordSize] to 0.
Increment (count[wordSize] += 1):

After the if block, the value of count[wordSize] is incremented by 1.
Why No else?
The else block would normally contain code that should run when the if condition is false. However, in this case, regardless of whether the if condition is true or false, the value of count[wordSize] needs to be incremented by 1.
The purpose of the if block is simply to ensure that count[wordSize] is initialized to 0 if it doesn't already have a value. The increment operation (count[wordSize] += 1) must always occur.
Thus, there is no need for an else clause since the action to be taken (incrementing count[wordSize]) is the same in both scenarios—whether count[wordSize] was previously defined or not.

*/

function wordSizes(words) {
  let wordsArray = words.split(" ");
  let result = {};

  for (let idx = 0; idx < wordsArray.length; idx++) {
    let currentWord = wordsArray[idx];
    let cleanWordSize = removeNonLetters(currentWord.toLowerCase()).length;

    if (cleanWordSize === 0) continue;

    // if (!result[cleanWordSize]) {
    //   //checks for falsy
    //   result[cleanWordSize] = 0; //add property with value of 0
    // }
    //Launch School version
    result[cleanWordSize] = result[cleanWordSize] || 0; //returns value of the
    //second operand if the first one is falsey, otherwise the first value is returned
    result[cleanWordSize] += 1; //increment value by 1
  }
  return result;
}

function removeNonLetters(string) {
  let result = "";

  for (let idx = 0; idx < string.length; idx++) {
    let currentChar = string[idx];

    if (isLetter(currentChar)) {
      result += currentChar;
    }
  }
  return result;
}

function isLetter(char) {
  return char >= "a" && char <= "z";
}

// console.log(wordSizes("Four score and seven."));
// console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!"));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(""));

// let sentence = "Four score and seven.";
// console.log(removeNonLetters(sentence.toLowerCase()));

// console.log(isLetter("Four score and seven."));
