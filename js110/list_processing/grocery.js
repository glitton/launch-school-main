function buyFruit(fruits) {}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

let fruits = [
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
];

console.log(fruits[0][0].split(" "));
