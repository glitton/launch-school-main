function wordCap(str) {
  let words = str.split(" ");
  let cappedWords = words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return cappedWords;
}

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'console.log(
