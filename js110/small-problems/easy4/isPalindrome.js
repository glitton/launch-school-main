/*
P - Problem
1.  Write a function that returns true if the string argument can be read the 
same forward and backward. Case matters and all characters matter

E- Examples/Test Cases
Explicit Rules: 
- String reads the same forwards and backwards
- Case matters
- All characters matter

Implicit:
- Characters are alphabetical and numerical
- No ending punctuation like period, semi-colon, question mark, exclamation point

D - Data Structure
Inputs: String
Output: Boolean
Intermediate: Array

A - Algorithm
1.  Iterate over the string from a forward and backward direction
  - forward: iterate through length/2
  - backward: iterate starting from the end string.length -1 and decrement 
  the end index
2.  Check if the characters match
3.  Return false for the first character mismatch
4.  Return true if all characters match when the loop ends

C - Code
*/

// function isPalindrome(string) {
//   let endIndex = string.length - 1;

//   for (let startIndex = 0; startIndex < string.length / 2; startIndex++) {
//     let currentLetter = string[startIndex];
//     if (currentLetter !== string[endIndex]) {
//       return false;
//     }
//     endIndex--;
//   }
//   return true;
// }

//Launch School version
function isPalindrome(string) {
  let finalStr = string.split("").reverse().join("");
  // console.log(finalStr);
  return string === finalStr;
}
// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("Madam")); // false (case matters)
//console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
// console.log(isPalindrome("356653"));

//Algorithm for isRealPalindrome
/*
1.  convert input string to lower case
Create helper functions to remove non letter  characters
- Create sub-functions to accept only letters or numbers
*/

function isRealPalindrome(string) {
  string = removeNonLettersNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLettersNumbers(string) {
  let result = "";

  for (let idx = 0; idx < string.length; idx++) {
    let currentChar = string[idx];

    if (isLetter(currentChar) || isNumber(currentChar)) {
      result += currentChar;
    }
  }
  return result;
}

function isLetter(char) {
  return char >= "a" && char <= "z";
}

function isNumber(char) {
  return char >= "0" && char <= "9";
}
// console.log(removeNonLettersNumbers("madam"));
//console.log(isRealPalindrome("madam")); // true
//console.log(isRealPalindrome("Madam")); // true (case does not matter)
//console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
//console.log(isRealPalindrome("356653")); // true
//console.log(isRealPalindrome("356a653")); // true
// console.log(isRealPalindrome("123ab321"));
