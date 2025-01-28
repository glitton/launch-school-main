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

function unscramble(scrambledString, mainString) {
  let finalString = "";

  for (let idx = 0; idx < mainString.length; idx++) {
    let currentCharacter = mainString[idx];
    if (scrambledString.includes(currentCharacter)) {
      finalString += currentCharacter;
    }
  }
  console.log(finalString);
  return finalString === mainString;
}

const p = console.log;
p(unscramble("ansucchlohlo", "launchschool") === true);
p(unscramble("phyarunstole", "pythonrules") === true);
p(unscramble("phyarunstola", "pythonrules") === false);
p(unscramble("boldface", "coal") === true);
