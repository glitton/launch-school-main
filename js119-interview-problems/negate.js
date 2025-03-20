/* Negate
P: Write a function, `negate`, that converts all `“yes”` words to `"no"` and `"no"` words to `"yes"` in a sentence. The comparison for `"yes"` and `"no"` should be case insensitive.`"yes"` and `"no"` should be negated even if ending with `.`, `?`, `,`, or `!`.
input: string
output: string where all Yes, yes words become No, no and vice-versa
rules:
- words are negated even if they have punctuation, keep the punctuation

E:

D: String, use an array to store the words 

A:
Create a punctuation constant assign to an array 
Create a finalSentence variable to store the final sentence with Yes/No toggled
Convert sentence to an array of words
Iterate over the sentenceArray of words
- Extract punctuation from each word, assume it is at the end
- Check if word includes punctuation
  - Yes: Extract a cleanWord version without punctuation
  - Check if cleanWord is Yes/No, yes/no 
  - append the opposite to finalSentence, keep case
- else, append cleanWord as is
- Check if cleanWord has punctuation, and add it back
- Add spaces
Return finalSentence

*/

const PUNCTUATION = [",", ".", "?", "!"];

function negate(sentence) {
  let finalSentence = "";
  let words = sentence.split(" ");

  for (let word of words) {
    let cleanWord = word;
    let lastChar = word.slice(-1);

    if (PUNCTUATION.includes(lastChar)) {
      cleanWord = word.slice(0, -1);
    }

    if (cleanWord === "Yes") {
      finalSentence += "No";
    } else if (cleanWord === "No") {
      finalSentence += "yes";
    } else if (cleanWord === "yes") {
      finalSentence += "no";
    } else if (cleanWord === "no") {
      finalSentence += "yes";
    } else {
      finalSentence += cleanWord;
    }

    if (PUNCTUATION.includes(lastChar)) {
      finalSentence += lastChar;
    }

    finalSentence += " ";
  }
  return finalSentence;
}
console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
console.log(negate("no way, yes way!")); // "yes way, no way!"
console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
console.log(negate("No, I do not know!")); // "Yes, I do not know!"
