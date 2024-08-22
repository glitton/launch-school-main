// function isUppercase(str) {
//   let strArray = str.split("");

//   let isUppercase = true;
//   strArray.forEach((str) => {
//     if (str !== str.toUpperCase()) {
//       isUppercase = false;
//     }
//   });
//   return isUppercase;
// }

//Launch School version

function isUppercase(str) {
  return str.toUpperCase() === str;
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
