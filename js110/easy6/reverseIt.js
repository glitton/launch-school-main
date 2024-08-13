function reverseSentence(string) {
  return string.split(" ").reverse().join(" ");
}

// console.log(reverseSentence("")); // ""
// console.log(reverseSentence("Hello World")); // "World Hello"
// console.log(reverseSentence("Reverse these words")); // "words these Reverse"

// function reverseWords(string) {
//   let reversedString = string.split("").reverse().join("");
//   return reversedString.split(" ").reverse().join(" ");
// }

function reverseWord(word) {
  return word.split("").reverse().join("");
}

function reverseWords(string) {
  const MIN_WORD_LENGTH = 5;
  let words = string.split(" ");
  let reversedWords = [];

  words.map((currentWord, idx) => {
    if (currentWord.length >= MIN_WORD_LENGTH) {
      reversedWords.push(reverseWord(currentWord));
    } else {
      reversedWords.push(currentWord);
    }
  });
  return reversedWords;
}

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
