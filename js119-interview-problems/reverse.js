/*
P: Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
input: string
output: string with every other word reversed
rules
- keep case
- keep punctuation
E:
D: input and output are string, array to store words 
A: 
Create a copy of the string as an array of words
Create a result empty array 
Iterate over the array
  if index is odd (1, 3, 5, etc ...), 
    - reverse the word (use reverse helper)
    - push the reversed word to result
  else push word as is
Return result as a string
*/

function reverse(str) {
  let result = [];
  let strArray = str.split(" ");

  if (strArray.length === 0) return "";

  strArray.forEach((word, idx) => {
    if (idx % 2 === 1) {
      result.push(reverseWord(word));
    } else {
      result.push(word);
    }
  });
  return result.join(" ").trim();
}

function reverseWord(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseWord('please!'))
console.log(reverse("Reverse this string, please!")); // "Reverse siht string, !esaelp");
console.log(reverse("I really don't like reversing strings!")); //"I yllaer don't ekil reversing !sgnirts");
