// let myWords = ["Hello", "Goodbye"];
// let myOtherWords = myWords;
// myWords[0] = "Hi";

// console.log(myWords); //["Hi", "Goodbye"];
// console.log(myOtherWords); //["Hello", "Goodbye"];

// let word = "Hello";

// function myFunc(param) {
//   param = "Goodbye";
//   return param;
// }

// word = myFunc(word);
// console.log(myFunc(word));

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = "Hello";
// myWord = changeMyWord(myWord);
// console.log(myWord);

// function changeMyWord(word) {
//   console.log(word);
//   word = word.toUpperCase();
//   return word;
// }

// let myWord = "Hello";
// let myOtherWord = changeMyWord(myWord);
// console.log(myWord);
// console.log(myOtherWord);

// function changeMyWords(words) {
//   console.log(words);
//   words[0] = "Hi";
// }

// let myWords = ["Hello", "Goodbye"];
// changeMyWords(myWords);
// console.log(myWords);

function changeMyWords(words) {
  console.log(words);
  words = ["Hi", "Goodbye"];
}

let myWords = ["Hello", "Goodbye"];
changeMyWords(myWords);
console.log(myWords);
