/*
Problem: Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

Examples/Test Cases
Input: string containing alphabets spaces and non-numeric
Output: Object that counts the number of lowercase, uppercase and neither

Explicit Rules:
- Case doesn't matter
- Empty space counts as neither
- non alphabet counts as neither (numbers, punctuation, math signs)

Implicit Rules:
- Input are strings

Data Structure: Strings, Object

Algorithm:
1.  Initialize an empty object variable and three count variables:  uppercase, lowercase and neither
2.  Convert string to array then iterate over the string
  - Check if each character is uppercase, if so
  - increment lowercase count, add to object
  - if not lowercase, check if uppercase, if so
  - increment uppercase count, add to object
  - if not, increment neither count, add to object
3.  Return object  

Code: 
*/

function letterCount(str) {
  let letterCount = { lowercase: 0, uppercase: 0, neither: 0 };
  let letterArray = str.split("");

  letterArray.forEach((letter) => {
    // console.log(letter);
    if (letter >= "a" && letter <= "z") {
      letterCount.lowercase += 1;
    } else if (letter >= "A" && letter <= "z") {
      letterCount.uppercase += 1;
    } else {
      letterCount.neither += 1;
    }
  });
  console.log(letterCount);
  return letterCount;
}

// Launch Shool version

function letterCaseCount(str) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];

    if (currentChar >= "a" && currentChar <= "z") {
      counts.lowercase += 1;
    } else if (currentChar >= "A" && currentChar <= "a") {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }
  return counts;
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(""));
