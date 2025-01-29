/*
P: Create a function that takes two strings as arguments and returns true if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return false.
You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.
input: 2 strings
output: boolean
E:
D:
A:
Initialize finalString variable
Iterate over the mainString
Check if each char in the mainString is part of the scrambledString
If yes, append the character from mainString to the finalString variable
return finalString === mainString
*/

// function unscramble(scrambledString, mainString) {
//   let finalString = "";

//   for (let idx = 0; idx < mainString.length; idx++) {
//     let currentCharacter = mainString[idx];
//     if (scrambledString.includes(currentCharacter)) {
//       finalString += currentCharacter;
//     }
//   }
//   return finalString === mainString;
// }

/*
More robust version:
A: 
Create an object to count occurrences of each character in scrambledString
Iterate over mainString
  - for each char, check if it is in the scrambledString object
  - if char exists, decrease the count in the scrambledString object
At the end of the loop, check if there are no negative counts
return true
*/

function unscramble(scrambledString, mainString) {
  const charCounts = {};

  for (let char of scrambledString) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  console.log(charCounts);

  for (let char of mainString) {
    if (!charCounts[char] || charCounts[char] === 0) {
      return false;
    }
    charCounts[char]--;
  }
  return true;
}

const p = console.log;
// p(unscramble("ansucchlohlo", "launchschool") === true);
// p(unscramble("phyarunstole", "pythonrules") === true);
// p(unscramble("phyarunstola", "pythonrules") === false);
p(unscramble("boldface", "coall") === false);

// Fuad's solution
// function unscramble(str1, str2) {
//   let freq1 = {};
//   let freq2 = {};

//   let flag = true;

//   for (let idx = 0; idx < str1.length; idx++) {
//     let currChar = str1[idx];
//     if (freq1.hasOwnProperty(currChar)) {
//       freq1[currChar] += 1;
//     } else {
//       freq1[currChar] = 1;
//     }
//   }

//   for (let idx = 0; idx < str2.length; idx++) {
//     let currChar = str2[idx];
//     if (freq2.hasOwnProperty(currChar)) {
//       freq2[currChar] += 1;
//     } else {
//       freq2[currChar] = 1;
//     }
//   }

//   for (let char in freq2) {
//     if (!freq1.hasOwnProperty(char)) flag = false;
//     if (freq1[char] < freq2[char]) flag = false;
//   }

//   return flag;
// }
