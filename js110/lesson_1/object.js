let statement = "The Flintstones Rock";
let charactersArray = statement.split("").filter((char) => char !== " ");
// console.log(charactersArray);
let result = {};

// for (let idx = 0; idx < charactersArray.length; idx++) {
//   // console.log(idx);
//   let currentCharacter = charactersArray[idx];
//   // console.log(currentCharacter);
//   if (Object.keys(result).includes(currentCharacter)) {
//     result[currentCharacter] += 1;
//   } else {
//     result[currentCharacter] = 1;
//   }
// }

console.log(result);
