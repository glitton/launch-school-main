/*
Problem: Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas. Also assume that the search is case-insensitive.

Example/Test Cases:
Input: word and a string text
Output: Integer representing the number of times the word appears in the text

Explicit Rules:
- word and text inputs will always be provided
- all word breaks are spaces
- some words will include punctiation
- search is case-insensitive

Implicit Rules:
- input are strings of alphabets and punctuation (no numbers)
- word is a complete word and not a substring

Data Structure:
Input: String
Output: Integer
Intermediate: Object (???)

Algorithm:
1.  Convert text to an array separated by words
2.  Initialize a count variable to zero
3.  Iterate over the array and convert each word to lower case.  
Compare the current word against the word argument:
  - If they are equal, increment the counter by 1
  - If not, move on to the next word
4.  Return the count variable  

*/

function searchWord(word, text) {
  let count = 0;
  let textArray = text.split(" ");
  textArray.map((char) => {
    char = char.toLowerCase();
    if (word === char) {
      count += 1;
    }
  });
  return count;
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

const pets =
  "Today, more and more people are opening up their homes and hearts to a new breed of companions: pets of the weird and wonderful kind!";

// console.log(searchWord("sed", text)); // 3
// console.log(searchWord("ut", text)); // 3
// console.log(searchWord("are", pets)); // 3

// function searchWordHighlighted(word, text) {
//   let textArray = text.split(" ");
//   return textArray.reduce((allWords, currWord) => {
//     currWord = currWord.toLowerCase();
//     if (currWord === word) {
//       word = `**${currWord.toUpperCase()}**`;
//       allWords.push(word);
//     } else {
//       allWords.push(currWord);
//     }
//     return allWords;
//   }, []);
// }
function searchWordHighlighted(word, text) {
  let textArray = text.split(" ");
  let highlightedText = textArray.map((currWord) => {
    if (currWord.toLowerCase() === word) {
      currWord = `**${word.toUpperCase()}**`;
    }
    return currWord;
  });
  return highlightedText.join(" ");
}

// console.log(searchWordHighlighted("sed", text));
console.log(searchWordHighlighted("and", pets));
// console.log(searchWordHighlighted("ut", text)); // 3
