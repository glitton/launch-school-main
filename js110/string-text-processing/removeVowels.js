/*
Problem: Write a function that takes an array of strings and returns an array of the same string values,
 but with all vowels (a, e, i, o, u) removed.

Examples/Test Cases:
Input: Array of strings
Output: Array of strings with vowels removed

Explicit Rules: 
- Vowels need to be removed from each string
- Case matters, keep case as is
Implicit Rules:
- Characters are alphabetic, no punctuation
- No empty array
- Not modifying original array

Data Structures: Array, strings

Algorithm:
1. Create an array of vowels
2.  Initiate an empty array to store the final strings without vowels
3. Iterate over the array length
4. Need another loop here: Examine each character in the string, check if it is part of the vowels array
  - if it is, move on to the next character
  - if it isn't, push it to the array variable from step 2
5.  Return the new array  
*/

// function removeVowels(arrOfStrings) {
//   const VOWELS = ["a", "e", "i", "o", "u"];
//   let noVowels = [];

//   for (let idx = 0; idx < arrOfStrings.length; idx++) {
//     for (let idx2 = 0; idx2 < arrOfStrings[idx].length; idx2++) {
//       let currCharacter = arrOfStrings[idx][idx2];
//       if (!VOWELS.includes(currCharacter.toLowerCase())) {
//         noVowels.push(currCharacter);
//       }
//     }
//   }
//   // noVowels = Array(noVowels.join(""));
//   return noVowels;
// }

//Launch School Version with regex
// function removeVowels(strings) {
//   return strings.map((string) => string.replace(/[aeiou]/gi, ""));
// }

//Launch School Version no regex

function removeVowels(strArray) {
  let finalNoVowels = strArray.map((str) => {
    let chars = str.split("");
    let removedVowels = deleteVowels(chars);
    return removedVowels.join("");
  });
  return finalNoVowels;
}

function deleteVowels(str) {
  const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let noVowels = str.map((char) => {
    if (VOWELS.indexOf(char) >= 0) {
      return "";
    } else {
      return char;
    }
  });
  return noVowels;
}

// console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]
