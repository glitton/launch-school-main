/*
P: Create a function that takes a string and returns a new string with every word capitalized, except for certain words (like "the", "a", "an", "and", "but", "for", "at", "by", "from") unless they're the first word in the string.

Example:
Input: "the quick brown fox jumps over the lazy dog"
Output: "The Quick Brown Fox Jumps over the Lazy Dog"

*/

function wordCapitalized(str) {
  const DO_NO_CAP = ["the", "a", "an", "and", "but", "for", "at", "by", "from"];
  let words = str.split(" ");

  return words
    .map((word, index) => {
      if (index === 0 || !DO_NO_CAP.includes(word)) {
        return capitalize(word);
      } else {
        return word;
      }
    })
    .join(" ");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(wordCapitalized("the quick brown fox jumps over the lazy dog"));
