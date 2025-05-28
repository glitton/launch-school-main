let numbers = [1, 2, 3];
numbers[6] = 5; // doesn't raise an error, JS will add 3 empty slots
numbers[4]; // output undefined, but slot is empty, it doesn't have a value not even undefined.

// console.log(numbers[4]);

const hasExclamation = (str) => {
  let endChar = str.charAt(str.length - 1);
  if (endChar === "!") {
    console.log("I'm so excited!");
  } else {
    console.log("ho hum");
  }
};

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?";

// hasExclamation(str1);
// hasExclamation(str2);

// console.log(str1.endsWith("!"));

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty("Spot"));

let munstersDescription = "the Munsters are CREEPY and Spooky.";
let lowercaseDescription = munstersDescription.toLowerCase();
let finalSentence = `${lowercaseDescription
  .charAt(0)
  .toUpperCase()}${lowercaseDescription.substring(1)}`;

// console.log(finalSentence);

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

let family = Object.assign(ages, additionalAges);
// console.log(family);

let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes("Dino"));
// console.log(str2.includes("Dino"));

str1.match("Dino") !== null; // false
str2.match("Dino") !== null; // true

str1.indexOf("Dino") > -1; // false
str2.indexOf("Dino") > -1; // true

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");
// console.log(flintstones);
// flintstones = flintstones.concat("Dino");
// flintstones[flintstones.length] = "Dino";

flintstones.push("Dino", "Hoppy");
// console.log(flintstones);

let advice =
  "Few things in life are as important as house training your pet dinosaur.";
// let removedString = advice.indexOf("house");
// let final = advice.slice(0, removedString);
// console.log(final);

console.log(advice.slice(0, advice.indexOf("house")));

// Expected return value:
// => 'Few things in life are as important as '
