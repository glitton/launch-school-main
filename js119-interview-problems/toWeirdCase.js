/*
P: Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.
input: string
output: copy of input string with every second char in every third word converted to uppercase
Rules: 
- leave other characters the same
- if third word contains less than 2 characters, leave it the same
E: 
D: string, array to hold each word
A:
Initialize vars
  - finalSentence = ''
  - upperCaseWord == ''
Convert input string to an array of words
Iterate over the array
  - use a word counter to track every third word, check if it has more than 2 characters
  - append the rest of the words to finalSentence
  Iterate over the word 
    - convert every second character of the word to uppercase
    - append to upperCaseWord
    - append converted word to finalSentence
    - reset upperCaseWord to an empty string
Return finalSentence    
*/

// function toWeirdCase(sentence) {
//   let finalSentence = "";
//   let upperCaseWord = "";
//   let sentenceArray = sentence.split(" ");
//   let wordCount = 0;

//   for (let idx = 0; idx < sentenceArray.length; idx++) {
//     let currentWord = sentenceArray[idx];
//     wordCount++;
//     // console.log(wordCount)
//     if (wordCount % 3 === 0) {
//       if (currentWord.length < 2) {
//         finalSentence += `${currentWord} `;
//       } else {
//         for (let jdx = 0; jdx < currentWord.length; jdx++) {
//           let currentLetter = currentWord[jdx];

//           if (jdx % 2 === 1) {
//             upperCaseWord += currentLetter.toUpperCase();
//           } else {
//             upperCaseWord += currentLetter;
//           }
//         }
//         finalSentence += `${upperCaseWord} `;
//         upperCaseWord = "";
//       }
//     } else {
//       finalSentence += `${currentWord} `;
//     }
//   }
//   return finalSentence.trim();
// }

/* Alternate PEDAC
P: Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.
input: string
output: copy of input string with every second char in every third word converted to uppercase
Rules: 
- leave other characters the same
- if third word contains less than 2 characters, leave it the same
E:
D: Array to store each word
A:
Initialze an empty array, upperCaseArray = []
Initialize wordCount to 0
Initialize upperCaseWord to an empty string
Convert input string to an array of words
Iterate over the array of words 
  - if wordCount is a multiple of 3 (3, 6, 9) and has a length greater than 2
    - Iterate over each letter of the word  
      - convert the 2nd letter to upper Case
      - append letters to upperCaseWord
      - append upperCaseWord to upperCaseArray  
      - reset upperCaseWord to an empty string
  - else append word to upperCaseArray    
return upperCaseArray as a string  
*/

function toWeirdCase(sentence) {
  let upperCaseArray = [];
  let upperCaseWord = "";
  let wordCount = 0;
  let sentenceArray = sentence.split(" ");

  for (let i = 0; i < sentenceArray.length; i++) {
    let currentWord = sentenceArray[i];
    wordCount++;
    if (wordCount % 3 === 0 && currentWord.length > 1) {
      for (let j = 0; j < currentWord.length; j++) {
        let currentLetter = currentWord[j];
        if (j % 2 === 1) {
          upperCaseWord += currentLetter.toUpperCase();
        } else {
          upperCaseWord += currentLetter;
        }
      }
      upperCaseArray.push(upperCaseWord);
      upperCaseWord = "";
    } else {
      upperCaseArray.push(currentWord);
    }
  }

  return upperCaseArray.join(" ");
}

let p = console.log;

let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
p(toWeirdCase(original) === expected);

original = "It is a long established fact that a reader will be distracted";
expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
p(toWeirdCase(original) === expected);

p(toWeirdCase("aaA bB c") === "aaA bB c");

original =
  "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
expected =
  "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);
