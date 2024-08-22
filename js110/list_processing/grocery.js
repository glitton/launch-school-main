function buyFruit(fruitsList) {
  let allFruits = fruitsList.map((fruit) => repeat(fruit));

  let finalFruitsList = allFruits.reduce((groceryList, fruit) =>
    groceryList.concat(fruit)
  );

  return finalFruitsList;
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];
  // console.log("fruit", fruit, quantity);

  for (let num = 0; num < quantity; num++) {
    result.push(fruit);
  }
  return result;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
