function multiply(numbers, multiplier) {
  let multipliedNumbers = [];
  for (let counter = 0; counter < numbers.length; counter++) {
    multipliedNumbers.push(numbers[counter] * multiplier);
  }
  return multipliedNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(multiply(myNumbers, 3));
console.log(multiply(myNumbers, 5));
