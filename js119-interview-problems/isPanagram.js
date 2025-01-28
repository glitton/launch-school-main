/*
P: Create a function that takes a string as an argument and returns true if the string is a pangram, false if it is not.
Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.
input: sentence
output: boolean
rules:
- case is irrelevant
- punctuation is irrelevant
E:
D: Array, object
A:
- Create an object to track presence of alphabet
- create a copy of the string without punctuation
  - replace punctuation with empty space
- Convert input string to an array of words
- Iterate over the array of words
  - Populate object to count key/value pairs
  - if key already exists, keep going
- Convert object to an array of keys
- return key.length === 26  
C:

*/

function isPangram(sentence) {
  let alphabet = {};
  let nonAlpha = [",", "!", ".", "’", " "];
  let cleanSentence = "";
  sentence.split("").forEach((letter) => {
    if (!nonAlpha.includes(letter)) {
      cleanSentence += letter.toLowerCase();
    }
  });
  console.log(cleanSentence);

  let cleanSentenceArray = cleanSentence.split("");
  // console.log(cleanSentenceArray);
  cleanSentenceArray.forEach((ltr) => {
    if (!alphabet[ltr]) {
      alphabet[ltr] = 1;
    }
  });
  // let keys = Object.keys(alphabet).length;
  // console.log(keys);
  return Object.keys(alphabet).length === 26;
}

const p = console.log;
// p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
// p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
// p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

// let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
// p(isPangram(myStr) === true);

// The above tests should each print true.
