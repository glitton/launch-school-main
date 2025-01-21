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
- secretMessage string = ''
Iteration (nested loop)
- convert sentence to array of words
- capture every second word
- Iterate over the second word
  - For the word, iterate over every letter
    - append every nth character to secretMessage string
- return secretMessage
*/

function decoder(sentence, n) {
  let secretMessage = "";
  let sentenceArray = sentence.split(" ");

  for (let i = n - 1; i < sentenceArray.length; i += n) {
    let word = sentenceArray[i];
    for (let j = n - 1; j < word.length; j += n) {
      secretMessage += word[j];
    }
  }
  return secretMessage;
}

// Test cases
console.log(decoder("She sells sea shells on the sea shore", 2)); // Output: "elhlshhr"
console.log(decoder("The quick brown fox jumps over the lazy dog", 3)); // Output: "oeg"
console.log(decoder("I love programming in JavaScript", 3)); // Output: "oai"
console.log(decoder("Just a simple test sentence to decode", 4)); // Output: "t"
console.log(decoder("This will not work well", 5)); // Output: ""
console.log(decoder("Send every code to find secrets hidden", 2)); // Output: "vroert"
