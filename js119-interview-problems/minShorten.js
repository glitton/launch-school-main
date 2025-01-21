/* 
P: Implement a function that shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the sequence of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit.
Input: string
Output: string
Rules 
- spaces do not count but needs to be maintained if a single vowel is removed
- shorten from the end and remove a then e then i then o then u, 
- case-insensitive
E: "Hello World" is 10, need to get to 8.  starting from the end, remove e in Hello
  Hllo World = then remove o from World, final is Hllo Wrld 
D: Array
A:
Initialize variables
  - result empty string
  - vowelsToRemove
  - sentenceLength
  - vowels string 
Iteration
 - get the number of vowels to remove  
 - create a string without spaces
- Iterate over the string of words (toLowerCase) starting from the end
  - if a or e or i or o or u are found, update string
  - repeat until number of vowels to remove is 0
- return final string  
*/

function minimumShorten(sentence, finalLength) {
  const VOWELS = "aeiou";
  let result = "";
  let changedWord = "";

  let noSpacesSentence = sentence.split(" ").join("");
  let vowelsToRemove = noSpacesSentence.length - finalLength;

  for (let idx = noSpacesSentence.length - 1; idx >= 0; idx--) {
    while (vowelsToRemove > 0) {}
  }
}

// Test cases
console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""
