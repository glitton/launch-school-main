const input = require("readline-sync");

function searchNumbers() {
  let numbers = [];

  let firstNumber = input.question("Enter the first number: ");
  numbers.push(firstNumber);

  let secondNumber = input.question("Enter the second number: ");
  numbers.push(secondNumber);

  let thirdNumber = input.question("Enter the third number: ");
  numbers.push(thirdNumber);

  let fourthNumber = input.question("Enter the fourth number: ");
  numbers.push(fourthNumber);

  let fifthNumber = input.question("Enter the fifth number: ");
  numbers.push(fifthNumber);

  let lastNumber = input.question("Enter the last number: ");

  if (numbers.includes(lastNumber)) {
    console.log(`The number ${lastNumber} appears in ${numbers} `);
  } else {
    console.log(`The number ${lastNumber} does not appear in ${numbers} `);
  }
}
