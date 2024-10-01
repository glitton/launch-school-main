let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

// function selectFruit(produceObj) {
//   let fruits = {};

//   for (let item in produceObj) {
//     if (produceObj[item] === "Fruit") {
//       fruits[item] = "Fruit";
//     }
//   }
//   return fruits;
// }

//use forEach
function selectFruit(produceObj) {
  let fruits = {};
  let produceKeyArray = Object.keys(produceObj);

  produceKeyArray.forEach((item) => {
    if (produceObj[item] === "Fruit") {
      fruits[item] = "Fruit";
    }
  });
  return fruits;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
// console.log(produce);
