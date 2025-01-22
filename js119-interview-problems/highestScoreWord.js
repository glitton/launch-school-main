/*
P: Given a string of words, you need to find the highest scoring word. Return the highest scoring word as a string.
input: string
output: string that contains the highest score
Rules: 
- Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
- If two words score the same, return the word that appears earliest in the original string.
- All letters will be lowercase and all inputs will be valid.

E: For example, the score of abad is 8 (1 + 2 + 1 + 4).
D: 
A:
Initialize vars
  - an alphabet string to serve as the scoring mechanism
  - currentScore = 0
  - highestScore = 0
  - currentWord = ''
  - highestScoreWord = ''
  - sum
Convert string to an array of words
Iterate over the array of words
  - get score of the current word by checking its index against the alphabet string
  - add indexes and assign sum of the current word to currentScore
  - if currentScore is greater than highestScore
    - highestScore = currentScore
    - highestScoreWord = currentWord
    - reset current score to 0
Return highestScoreWord
*/

function high(str) {
  const ALPHABET = "0abcdefghijklmnopqrstuvwxyz";

  let strArray = str.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";

  strArray.forEach((word) => {
    let currentScore = 0;
    let currentWord = word;
    for (let idx = 0; idx < word.length; idx++) {
      currentScore += ALPHABET.indexOf(word[idx]);
    }
    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestScoreWord = currentWord;
    }
  });
  return highestScoreWord;
}
// Test Cases
// console.log(high("man")); // "taxi"
console.log(high("man i need a taxi up to ubud")); // "taxi"
console.log(high("what time are we climbing up the volcano")); //"volcano"
console.log(high("take me to semynak")); // "semynak"
console.log(high("aa b")); // "aa"
console.log(high("b aa")); // "b"
console.log(high("bb d")); // "bb"
console.log(high("d bb")); // "d"
console.log(high("aaa b")); // "aaa"
