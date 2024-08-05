const input = require("readline-sync");

function askNumbers() {
  let numbers = [];

  let firstNumber = input.question("Enter the first number: ");
  numbers.push(Number(firstNumber));

  let secondNumber = input.question("Enter the second number: ");
  numbers.push(Number(secondNumber));

  let thirdNumber = input.question("Enter the third number: ");
  numbers.push(Number(thirdNumber));

  let fourthNumber = input.question("Enter the fourth number: ");
  numbers.push(Number(fourthNumber));

  let fifthNumber = input.question("Enter the fifth number: ");
  numbers.push(Number(fifthNumber));

  let lastNumber = input.question("Enter the last number: ");
  numbers.push(Number(lastNumber));

  return numbers;
}
// console.log(askNumbers());

// function isIncluded(arr, val) {
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (arr[idx] > val) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(isIncluded(askNumbers(), 4));

function isIncluded(arr, val) {
  val = (element) => element === 4;
  return arr.some(val);
}

console.log(isIncluded(askNumbers(), 4));
