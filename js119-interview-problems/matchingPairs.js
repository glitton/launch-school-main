/* 
P: Given a sentence, find all pairs of words whose first letter matches the last letter of its pair. Return an empty array if there’s no such pair. Only consider words that have at least length of 2 for the pairings.
input: string
output: array of array pairs where the first letter of the first pair matches with the last letter of its pair
Rules
- return an empty array if there are no pairs
- each word must have a length of 2
- pairs are consecutive
E: 
D:
A:
Initialize empty result array
Covert input string to an array of words

Iterate over the array of words using a nested loop
- For every word that has a length >= 2 continue 
- for the first word, check for a match of its first letter with the last letter of the next word
  - append the pair as an array to result
- return result  
*/

function findMatchingPairs(sentence) {
  let result = [];
  let sentenceArr = sentence.split(" ");

  for (let i = 0; i < sentenceArr.length - 1; i++) {
    for (let j = i + 1; j < sentenceArr.length; j++) {
      if (sentenceArr[i].length >= 2) {
        if (
          sentenceArr[i][0].toLowerCase() ===
          sentenceArr[j][sentenceArr[j].length - 1].toLowerCase()
        ) {
          result.push([sentenceArr[i], sentenceArr[j]]);
        }
      }
    }
  }
  return result;
}

// Test cases
console.log(findMatchingPairs("The cat in the hat")); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
console.log(findMatchingPairs("A man a plan a canal Panama")); // []
console.log(findMatchingPairs("This sentence has no pairs")); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
console.log(findMatchingPairs("Apple leads to leap")); // []
