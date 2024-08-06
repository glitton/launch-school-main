// function digitList(numbers) {
//   numStringArray = numbers.toString().split("");
//   let numArray = [];

//   for (let idx = 0; idx < numStringArray.length; idx += 1) {
//     let num = parseInt(numStringArray[idx]);
//     numArray.push(num);
//   }
//   return numArray;
// }

function digitList(numbers) {
  let numStringArray = numbers.toString().split("");

  let numArray = numStringArray.map((element) => parseInt(element, 10));
  return numArray;
}

console.log(digitList(12345));
