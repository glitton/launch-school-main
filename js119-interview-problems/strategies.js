// 1. Detect a palindrome
let word = "madam";

// console.log(word === word.split("").reverse().join(""));

// 2.  Detect an anagram

let text = "space";
let text2 = "paces";

// console.log(text.split("").sort().join("") === text2.split("").sort().join(""));

// 3. Create various lengths of arrays such as substrings

let str = "bennie";
let allSubStrings = [];

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    allSubStrings.push(str.slice(i, j));
  }
}

// console.log(allSubStrings);

// 4.  Create combinations of pairs or 3, 4 more elements.  Create n number of nested loops

let array = [1, 2, 3, 4, 5];
let combos = [];

for (let i = 0; i < array.length - 2; i++) {
  for (let j = i + 1; j < array.length - 1; j++) {
    for (let k = j + 1; k < array.length; k++) {
      combos.push(array[i], array[j], array[k]);
    }
  }
}

// console.log(combos);
