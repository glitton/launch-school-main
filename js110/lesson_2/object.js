let finalArray = [
  { a: "ant", b: "elephant" },
  { c: "cat", d: "dog" },
].filter((object) => {
  return Object.keys(object).every((key) => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

// console.log(finalArray);

let animals = { a: "ant", b: "elephant", c: "cat", d: "dog" };

// let animalKeys = Object.keys(animals);
// console.log(animals["b"][0]);

let someFinalArray = [
  { a: "ant", b: "elephant" },
  { c: "cat", d: "dog" },
].filter((object) => {
  return Object.keys(object).some((key) => object[key][0] === key);
});

// console.log(someFinalArray);

let someAnimals = Object.keys(animals).some((key) => animals[key][0] === key);
console.log(someAnimals);
