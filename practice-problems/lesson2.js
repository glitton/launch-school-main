// 1. How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

// let arr = ["10", "11", "9", "7", "8"];

// let sortedStrings = arr.sort((a, b) => Number(b) - Number(a));

// console.log(sortedStrings);

//2. How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

let publishedBooks = books.sort(
  (a, b) => Number(a.published) - Number(b.published)
);

// console.log(publishedBooks);

//3.  Access the letter g
// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// // console.log(arr1[2][1][3]);

// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];
// // console.log(arr2[1]["third"][0]);
// // console.log(arr2[1].third[0]);

// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// // console.log(arr3[2].third[0][0]);

// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// // console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// console.log(Object.keys(obj2.third)[0]);

//4: For each of these collection objects, demonstrate how you would change the value 3 to 4.

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// // console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// // console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// // console.log(obj1);

// let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;

// // console.log(obj2);

//5. Compute and display the total age of the male members of the family.

let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

let totalMaleAge = 0;
for (let member in munsters) {
  if (munsters[member].gender === "male") {
    totalMaleAge += munsters[member].age;
  }
}
// console.log(totalMaleAge);

let memberDetails = Object.values(munsters);
let maleAgeSum = 0;
memberDetails.forEach((member) => {
  if (member.gender === "male") {
    maleAgeSum += member.age;
  }
});
// console.log(maleAgeSum);

//6. Given this family object, print the name, age, and gender of each family member:
// let munstersArray = Object.entries(munsters);
// munstersArray.forEach((member) => {
//   let name = member[0][0].toUpperCase() + member[0].slice(1);
//   let age = member[1].age;
//   let gender = member[1].gender;
//   console.log(`${name} is a ${age}-year-old ${gender}`);
// });

//7. Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5,8]] a = 2, b = [5,8]

arr[0] += 2; //arr = [4, [5,8]]
arr[1][0] -= a; // a = 2, arr[1][0] = 3

//8: Use forEach

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

let objArray = Object.values(obj);
let vowels = "aeiou";
// objArray.forEach((arr) => {
//   arr.forEach((word) => {
//     word.split("").forEach((char) => {
//       if (vowels.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });

//9. Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

let multiArray = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

//check elements of the array with every
//if all are strings, use sort(), if all are numbers sort(a,b)

const isNumber = (el) => typeof el === "number";

let sortedArraysAsc = multiArray.map((arr) => {
  if (arr.every(isNumber)) {
    return arr.slice().sort((a, b) => a - b);
  } else {
    return arr.slice().sort();
  }
});

// console.log(sortedArraysAsc);
// console.log("og", multiArray);

//10. Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let sortedArraysDec = multiArray.map((arr) => {
  if (arr.every(isNumber)) {
    return arr.slice().sort((a, b) => b - a);
  } else {
    return arr.slice().sort().reverse();
  }
});

// console.log(sortedArraysDec);
// console.log(multiArray);

//11.  Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

let arrObj = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let arrayObjCopy = arrObj.slice();
// This solution mutates the original so doesn't work
// let finalArray = arrayObjCopy.map((obj) => {
//   for (let key in obj) {
//     obj[key] += 1;
//   }
//   return obj;
// });
// console.log(arrayObjCopy);

//Create a deep copy using the spread operator
// let arrObjCopy = arrObj.map((obj) => ({ ...obj }));

// let incrementedArray = arrObjCopy.map((obj) => {
//   for (let key in obj) {
//     obj[key] += 1;
//   }
//   return obj;
// });

//Create a deep copy using Object.assign

let arrObjCopy = arrObj.map((obj) => Object.assign({}, obj));
let incrementedArray = arrObjCopy.map((obj) => {
  for (let key in obj) {
    obj[key] += 1;
  }
  return obj;
});
// console.log(incrementedArray);
// console.log(arrObj);

//12.  Create a deep copy of the nested array

const nestedArray = [
  ["b", "c", "a"],
  ["blue", "black", "green"],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

const deepCopyArray = JSON.parse(JSON.stringify(nestedArray));
// console.log(deepCopyArray);

//13. Create a deep copy, can't use JSON bec it doesn't recognize undefined, converts it to null.  Treats NaN as null.

const truthiness = {
  falsy: [null, undefined, "", false, NaN, 0],
  truthy: ["everything else..."],
};

// console.log("og", truthiness);

const deepCopy = {};

for (let prop in truthiness) {
  deepCopy[prop] = [...truthiness[prop]];
}

truthiness.truthy[1] = "bennie";

// console.log(truthiness);
// console.log(deepCopy);

//14. Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let arrOfNumbers = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOfThree = arrOfNumbers.map((arr) => {
  return arr.filter((num) => num % 3 === 0);
});

// console.log(multiplesOfThree);

//15. Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let numbersMultiArray = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];
//Iterate over the array, for each subArr assign a an oddSum var to each array.  Sort the odd sum on ascending order.  Order the array based on the odd sum sorting

let oddSum1 = numbersMultiArray[0].reduce((sum, oddNum) => {
  if (oddNum % 2 !== 0) {
    return sum + oddNum;
  } else {
    return sum;
  }
}, 0);

let oddSum2 = numbersMultiArray[1].reduce((sum, oddNum) =>
  oddNum % 2 !== 0 ? sum + oddNum : sum
);
let oddSum3 = numbersMultiArray[2].reduce((sum, oddNum) =>
  oddNum % 2 !== 0 ? sum + oddNum : sum
);

// console.log(oddSum1, oddSum2, oddSum3);

let sortedMultiArray = numbersMultiArray.sort((a, b) => {
  let sumA = a.filter((num) => num % 2 !== 0).reduce((sum, next) => sum + next);
  let sumB = b.filter((num) => num % 2 !== 0).reduce((sum, next) => sum + next);

  return sumA - sumB;
});

// console.log(sortedMultiArray);

//16.  Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let fruitObj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

// function fruitAndVegetables(obj) {
//   let finalFruitsArray = [];
//   for (let prop in obj) {
//     if (obj[prop]["type"] === "fruit") {
//       let fruitColors = obj[prop]["colors"];
//       fruitColors = fruitCase(fruitColors);
//       finalFruitsArray.push(fruitColors);
//     } else {
//       let vegSize = vegCase(obj[prop]["size"]);
//       finalFruitsArray.push(vegSize);
//     }
//   }
//   return finalFruitsArray;
// }

// function fruitCase(arr) {
//   return arr.map((item) => item[0].toUpperCase() + item.slice(1));
// }

// function vegCase(str) {
//   return str.toUpperCase();
// }

// console.log(fruitAndVegetables(fruitObj));

//LS version

let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

let fruitsAndVeggies = Object.values(fruitObj).map((props) => {
  if (props["type"] === "fruit") {
    return props["colors"].map((char) => capitalize(char));
  } else {
    return props["size"].toUpperCase();
  }
});

// console.log(fruitsAndVeggies);

//17. Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

let numbersArr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenNumbersObj = numbersArr.filter((obj) =>
  Object.values(obj).every((subArray) => subArray.every((num) => num % 2 === 0))
);

// console.log(evenNumbersObj);

//18. Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second.

let myArray = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let myObj = {};
myArray.forEach((arr) => {
  let key = arr[0];
  let value = arr[1];
  myObj[key] = value;
});

// console.log(myObj);

let objEntries = Object.fromEntries(myArray);
// console.log(objEntries);

//19. Remember The Munsters from earlier questions? For this problem, you are tasked with creating a deep copy of the munsters object, whose nested objects cannot be altered.

const munstersIndestructible = JSON.parse(
  JSON.stringify(munsters),
  (munster, info) => Object.freeze(info)
);

//20. Write a function that takes no arguments and returns a string that contains a UUID.
/*
P:
Input: None
Output: 
- 5 sections of strings with an 8-4-4-4-12 pattern
- The string consists of digits 0-9 and letters a-f
E: 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'
D: Array
A:
- create an array of characters and sections
- create a UUID variable assign it to an empty string
- iterate over the sections array
  -- Use a for loop to generate random characters the length of the section number
  -- append the random character to a UUID variable
  -- At the section length index, add a hyphen to the UUID variable
- return UUID
*/

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let sections = [8, 4, 4, 4, 12];
  let uuid = "";

  sections.forEach((section, sectionIndex) => {
    console.log(section, sectionIndex);

    for (let idx = 1; idx <= section; idx++) {
      let randomIdx = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIdx];
    }
    // This happens after the for loop.  sectionIndex will always be smaller except for
    // the last index which is 4.  We don't want to add a hyphen in the last index hence this condition.
    if (sectionIndex < sections.length - 1) {
      uuid += "-";
    }
  });
  return uuid;
}

// console.log(generateUUID());
// generateUUID();

//21. Identify the higher-order functions and callbacks in this code.

function scream(message, helper) {
  const shout = () => message.toUpperCase();

  return helper(shout()); // what is passed here is the return value of shout and not the function itself
}

const exclamate = (str) => str + "!!!";

const foo = ["heLp", "Boo", "arGH", "Oh no"];
const FOO = foo.map((word) => scream(word, exclamate));

/*
Higher-order functions (take another function as an argument, return a function, or both)
- scream and map 


Callbacks (passed as arguments to other functions)
- callback is used in the map method (word) => scream(word, exclamate)
- exclamate is a callback and is used as an argument in the scream function 
*/
