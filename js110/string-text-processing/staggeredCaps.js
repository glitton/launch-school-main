/*
Problem: Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

Examples/Test Cases:
Input: string
Output: string with staggered cases

Explicit Rules:
- Input is a string
- includes alpha and non-alpha character
- non-alpha and spaces should be left along but is part of the count of characters to determine when to switch from upper to lowercase and vice versa

Implicit Rules:
- It seems that the characters at the even index are capitalized

Data Structures: String, can be array

Algorithm:
1. Initialize a string variable to store the final string
2.  Iterate over the string
  - If index is even (0, 2, 4, 6), check if character is capitalized, if not, transform to capital and add it to string variable
  - if char is already capitalized, add to string variable
  - for odd index, check if character is lowercase
    - if it is, add to string var
    - if not, lowercase it and add it to string var
3.  Return the final string

Algorithm 2
1.  Transform string to an array
2.  Map over the array
3.  Do steps 2 from above
4.  join the array and return the final string

*/

function staggeredCaseLong(str) {
  let staggeredString = "";
  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str[idx];
    if (idx % 2 === 0) {
      if (currentChar.toUpperCase() === currentChar) {
        staggeredString += currentChar;
      } else {
        staggeredString += currentChar.toUpperCase();
      }
    } else {
      if (currentChar.toLowerCase() === currentChar) {
        staggeredString += currentChar;
      } else {
        staggeredString += currentChar.toLowerCase();
      }
    }
  }
  console.log(staggeredString);
  return staggeredString;
}

function staggeredCase(str) {
  return str
    .split("")
    .map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
}

// console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
// console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase2(str) {
  let strNoSpaces = str
    .split("")
    .filter((char) => char !== " ")
    .join(" ");
  console.log(strNoSpaces);
}

console.log(
  staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!"
);
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

/*
1.  
*/
