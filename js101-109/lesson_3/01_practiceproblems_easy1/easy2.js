let advice =
  "Few things in life are as important as house training your important pet dinosaur.";
// console.log(advice.replace("important", "urgent"));
// console.log(advice.replaceAll("important", "urgent"));

// let numbers = [1, 2, 3, 4, 5];
// console.log(-(numbers.length - 1));
// let reversedArray = numbers.slice().reverse();

// let sortedReversedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedReversedArray);

// let reversedArray = [];

// numbers.forEach((number) => {
//   reversedArray.unshift(number);
// });

// console.log(reversedArray);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8; // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

let famousWords = "seven years ago...";
let beginningFamousWords = "Four score and ";
// let final = `${beginningFamousWords}${famousWords}`;
let final = beginningFamousWords.concat(famousWords);
// console.log(final);

// let numbers = [1, 2, 3, 4, 5];
// numbers.splice(1, 1);
// console.log(numbers);

// let flintstones = ["Fred", "Wilma"];
// let flinstones2 = ["Barney", "Betty"];
// let flinstones3 = ["Bambam", "Pebbles"];

// // const flinstonesFamily = flintstones.concat(flinstones2, flinstones3);

// const flinstonesFamily = [...flintstones, ...flinstones2, ...flinstones3];
// console.log(flinstonesFamily);

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// // flintstones = [].concat(...flintstones); //concat
// flintstones = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);

// // console.log(flintstones);

// let flinstonesFamily = [];
// flintstones.forEach((element) => {
//   //why does this not need a return??
//   flinstonesFamily = flinstonesFamily.concat(element);
// });

// // console.log(flinstonesFamily);

// let newFlintstones = flintstones.flat();
// console.log(newFlintstones);

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

const flintstonesArray = Object.entries(flintstones);
// console.log(flintstonesArray);

const barneyEntry = flintstonesArray
  .filter((pair) => pair[0] === "Barney")
  .shift();
// console.log(barneyEntry);

let numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

let title = "Flintstone Family Members";
// console.log(title.length);

let padding = Math.floor((40 - title.length) / 2);
const centeredTitle = title.padStart(padding + title.length, "*");

// console.log(centeredTitle);

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let count1 = statement1.split("").filter((char) => char === "t").length;
let count2 = statement2.split("").filter((char) => char === "s").length;

console.log(count2);
