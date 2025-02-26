/* Given a sentence, replace the middle character of each word with length 3 or more with `*`. If the word has an even length, replace the character just before the midpoint. 
input: string
output: modified string

E:

D: input string, use an array to iterate over?

A:
Initialize a result empty array
Convert input string to an array of words
Iterate over the array
  - check each word if the length is greater than or equal to 3
    - if word length is even, replace character before the midpoint with '*'
    - else replace the middle character with '*'
  append modifiedWord to result
Return result as a string    
 */

function replaceMiddleChar(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length < 3) return word;

      let midpoint = Math.floor(word.length / 2);
      if (word.length % 2 === 0) {
        midpoint -= 1;
      }
      return word.slice(0, midpoint) + "*" + word.slice(midpoint + 1);
    })
    .join(" ");
}

// function replaceMiddleChar(str) {
//   return str
//     .split(" ")
//     .map((word) => {
//       if (word.length < 3) return word;

//       let mid = Math.floor(word.length / 2);

//       if (word.length % 2 == 0) mid -= 1;

//       word = word.split("");
//       word[mid] = "*";
//       return word.join("");
//     })
//     .join(" ");
// }
//Test cases
console.log(replaceMiddleChar("The quick fox jumps")); // "T*e qu*ck f*x ju*ps"
console.log(replaceMiddleChar("A cat sits")); // "A c*t s*ts"
console.log(replaceMiddleChar("Apple pie is good")); // "Ap*le p*e is g*od"
console.log(replaceMiddleChar("Hi bye")); // "Hi b*e"
