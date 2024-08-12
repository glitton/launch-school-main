// function reverseNumber(number) {
//   let reversedNumber = number.toString().split("").reverse().join("");
//   return parseInt(reversedNumber);
// }

// const reverseNumber = (num) =>
//   parseFloat(num.toString().split("").reverse().join(""));

// const reverseNumber = (num) =>
//   parseInt(num.toString().split("").reverse().join(""));

//Launch School solution

// function reverseNumber(number) {
//   let numberStringArray = String(number).split("");
//   let reversedStringedNum = numberStringArray.reverse().join("");
//   return parseInt(reversedStringedNum, 10);
// }

const reverseNumber = (num) =>
  parseInt(String(num).split("").reverse().join(""), 10);

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1

// Good resource https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
