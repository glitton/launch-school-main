/*
P: Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.
Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.
input: sentence
output: boolean
rules:
- case is irrelevant
- punctuation is irrelevant
E:
D: input is a string, array of letters
A:
- Initialize a constant that contains a string of the alphabet
- Initialize an empty alphabetArray 
- convert the string to lower case
- Iterate over the string
  - if the alphabet string includes the letter and it is not part of the alphabetArray, append it to the alphabetArray
- return alphabetArray.length === 26  
C:
*/

function isPangram(sentence) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = [];
  let sentenceLowerCaseArray = sentence.toLowerCase().split("");

  sentenceLowerCaseArray.forEach((letter) => {
    if (ALPHABET.includes(letter) && !alphabetArray.includes(letter)) {
      alphabetArray.push(letter);
    }
  });
  return alphabetArray.length === 26;
}
const p = console.log;
p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

// let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
// p(isPangram(myStr) === true);

// The above tests should each print true.
