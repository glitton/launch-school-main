// function sequence(finalNumber) {
//   let finalArray = [];
//   for (let idx = 1; idx <= finalNumber; idx++) {
//     finalArray.push(idx);
//   }
//   console.log(finalArray);
//   return finalArray;
// }

const sequence = (limit) => {
  let newArray = new Array(limit);

  // .forEach() will work now!
  [...newArray].forEach((item, index) => {
    let finalArray = [];
    finalArray.push(index + 1);
    return finalArray;
  });
};

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
