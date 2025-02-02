/* 
P: Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

If no consecutive vowels are found, return null.
input: string
output: index of the rightmost consecutive vowel
Rules
  - case insensitive
  - rightmost vowel is the index of the first a in aazy of laaazy
  - space is included in the index count
E:
D: input string
A:
Initialize a var rightMostIndex assign to 0
Initialize a vowel constant set to aeiou
Iterate over the string
  Check index i and i + 1: are they both vowels?
    - yes, set currentIndex to i
      - if currentIndex > rightMostIndex, rightMostIndex = currentIndex
return rightMostIndex   
 */

function rightmostConsecutiveVowel(sentence) {
  let rightMostIndex = null;
  const VOWELS = "aeiouAEIOU";

  for (let idx = 0; idx < sentence.length; idx++) {
    let currentLetter = sentence[idx];
    let nextLetter = sentence[idx + 1];

    if (VOWELS.includes(currentLetter) && VOWELS.includes(nextLetter)) {
      let currentIndex = idx;
      if (currentIndex > rightMostIndex) {
        rightMostIndex = currentIndex;
      }
    }
  }

  return rightMostIndex;
}

// Test Cases
console.log(
  rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
); // Output: 37
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
console.log(
  rightmostConsecutiveVowel("This sentence has no consecutive vowels")
); // Output: null
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23
