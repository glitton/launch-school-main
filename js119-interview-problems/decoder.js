/*
P: Create a function called decoder that decodes a secret message from a sentence. The secret message is formed by retrieving every n**-th character** from every n**-th word** of the sentence.
Input: string
Output: string

Rules:
•  If the word has fewer than n characters, skip that word.
•  If there are fewer than n words in the sentence, return an empty string.
•  Words in the sentence are separated by spaces. 

E: "She sells sea shells on the sea shore" 
2nd words = sells, shells, the, shore
2nd character/ word => el (in sells) + hls + h + hr => elhlshhr

D: Array 
A:
Initialize vars
- secondWords array = []
- secretMessage string = ''
Iteration
- convert sentence to array of words
- append every second word to the secondWords array
- Iterate over secondWords array
  - For every word, iterate over every letter
    - append every nth character to secretMessage string
- return secretMessage
*/

function decoder(sentence, n) {
  let secondWords = [];
  let secretMessage = "";

  let sentenceArray = sentence.split(" ");

  for (let idx = n - 1; idx < sentenceArray.length; idx += n) {
    secondWords.push(sentenceArray[idx]);
  }

  secondWords.forEach((word) => {
    for (let idx = n - 1; idx < word.length; idx += n) {
      secretMessage += word[idx];
    }
  });
  return secretMessage;
}

// Test cases
console.log(decoder("She sells sea shells on the sea shore", 2)); // Output: "elhlshhr"
console.log(decoder("The quick brown fox jumps over the lazy dog", 3)); // Output: "oeg"
console.log(decoder("I love programming in JavaScript", 3)); // Output: "oai"
console.log(decoder("Just a simple test sentence to decode", 4)); // Output: "t"
console.log(decoder("This will not work well", 5)); // Output: ""
console.log(decoder("Send every code to find secrets hidden", 2)); // Output: "vroert"
