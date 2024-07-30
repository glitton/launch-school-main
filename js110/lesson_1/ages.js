let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

// function addAges(object) {
//   let objectValues = Object.values(object);
//   let sumOfAges = 0;
//   objectValues.forEach((element) => (sumOfAges += element));
//   return sumOfAges;
// }
// console.log(addAges(ages));

// let objectValues = Object.values(ages);
// // console.log(objectValues);
// let sumOfAges = 0;
// for (let idx = 0; idx < objectValues.length; idx++) {
//   let currentElement = objectValues[idx];
//   // console.log(currentElement);
//   sumOfAges += currentElement;
// }

// console.log(sumOfAges);

// let totalAges = 0;
// Object.values(ages).forEach((age) => (totalAges += age));
// console.log(totalAges);

let totalAges = Object.values(ages).reduce(
  (sumOfAges, currentValue) => sumOfAges + currentValue,
  0
);

// console.log(totalAges);

let agesArray = Object.values(ages);
// console.log(...agesArray);
let sortedAgesArray = agesArray.sort((a, b) => a - b);
const minimumAge = sortedAgesArray[0];
// console.log(minimumAge);

let youngest = Math.min(...agesArray);
console.log(youngest);
