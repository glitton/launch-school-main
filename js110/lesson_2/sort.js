// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   console.log(a, b);
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }); // => [ 1, 2, 4, 9, 11, 21, 107 ]

let resultAsc = [2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b); //ascending

let resultDesc = [2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a); //descending
// console.log(resultDesc);

function sortWordsByLength(array) {
  let finalWords = [];
  let wordsLengthArray = array.map((element) => {
    return element.length;
  });
  let sortedWordsLengthArray = wordsLengthArray.sort((a, b) => a - b);

  for (let idx = 0; idx < array.length; idx++) {
    let currentWord = array[idx];
    if (currentWord.length === sortedWordsLengthArray[idx]) {
      console.log(sortedWordsLengthArray[idx]);

      finalWords.push(currentWord);
    }
  }
  // console.log(finalWords);

  return finalWords;
}

let words = ["go", "ahead", "and", "jump"];
sortWordsByLength(words);
