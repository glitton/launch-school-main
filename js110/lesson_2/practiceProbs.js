//1
// let arr = ["10", "11", "9", "7", "8"];

// let sortedArrayAsc = arr.sort((a, b) => Number(a) - Number(b)); //ascending
// let sortedArrayDes = arr.sort((a, b) => Number(b) - Number(a)); //descending

// console.log(sortedArrayDes);

//2
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

let sortedBooks = books.sort(
  (a, b) => Number(a.published) - Number(b.published)
);

// console.log(sortedBooks);

//3

// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// console.log(arr1[2][1][3]);

// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];
// // console.log(arr2[1]["third"][0]);

// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// // console.log(arr3[2].third[0][0]);

// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// // console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// let g = Object.keys(obj2.third)[0];
// console.log(g);

//4 Change the value from 3 to 4

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
// console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
// console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
// console.log(obj1);

let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
// console.log(obj2);

//5 Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]["gender"] === "male") {
    totalMaleAge += munsters[member].age;
  }
}

// console.log(totalMaleAge);

//Using Object.values and forEach

let memberDetails = Object.values(munsters);
// console.log(memberDetails);

let maleAge = 0;

memberDetails.forEach((member) => {
  if (member.gender === "male") {
    maleAge += member.age;
  }
});

// console.log(maleAge);

//6 print the name, age, and gender of each family member:
Object.entries(munsters).forEach((entry) => {
  // console.log(entry);

  let name = entry[0];
  let age = entry[1].age;
  let gender = entry[1].gender;

  // console.log(`${name} is a ${age}-year-old ${gender}`);
});

//7 Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b]; //[2, [5,8]]

arr[0] += 2; //[4, [5,8]]
arr[1][0] -= a;
// console.log(arr); //[4, [3,8]]

//8 Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

function outputVowels(obj) {
  // const vowels = "aeiou";
  const vowels = ["a", "e", "i", "o", "u"]; // this way works too
  let objArray = Object.values(obj);

  objArray.forEach((arr) => {
    arr.forEach((word) => {
      let letters = word.split("");
      letters.forEach((letter) => {
        if (vowels.includes(letter)) {
          console.log(letter);
        }
      });
    });
  });
}
// outputVowels(obj);

/* 9 
Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/

let arrayOfArrays = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let sortedArray = arrayOfArrays.map((subArr) => {
  if (typeof subArr[0] === "string") {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});
// console.log(sortedArray);

// 10 - Sort above in descending order
let sortedArrayDes = arrayOfArrays.map((subArr) => {
  if (typeof subArr[0] === "string") {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});

// console.log(sortedArrayDes);

//Launch School solution
let descSortedArr = arrayOfArrays.map((subArray) => {
  return subArray.slice().sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
  });
});

// console.log(descSortedArr);

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

/* 11
Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.
*/

let arrObj = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let objPlusOne = arrObj.map((obj) => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }
  return incrementedObj;
});

// console.log(objPlusOne);

/*
12: Create a deep copy of the following nested array.
*/

const originalArray = [
  ["b", "c", "a"],
  ["blue", "black", "green"],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let serializedArr = JSON.stringify(originalArray); //serializes the object
let deepCopiedArr = JSON.parse(serializedArr);

// deepCopiedArr.push("bennie");

// console.log(deepCopiedArr);
// console.log("og", originalArray);

/*
13: Create a deep copy of the following object.
*/

const truthiness = {
  falsy: [null, undefined, "", false, NaN, 0],
  truthy: ["everything else..."],
};

let deepCopyTruthiness = { ...truthiness };

deepCopyTruthiness["pets"] = ["bennie"];

// console.log(deepCopyTruthiness);
// console.log("og", truthiness);

let serialTruthy = JSON.stringify(truthiness); //can't stringify undefined, becomes null

const deepCopy = {};

for (let prop in truthiness) {
  deepCopy[prop] = [...truthiness[prop]];
}

// console.log(deepCopy);
// console.log(deepCopyTruthiness);
// console.log(truthiness);

// console.log(truthiness === deepCopyTruthiness);

deepCopyTruthiness["falsy"][3] = "Hello";
console.log("og", truthiness);
console.log("og", deepCopyTruthiness);

/*
14: Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

Algorithm:
1.  Iterate over the array using map in order to return a new array
2.  Use filter to get the elements that are multiples of 3
3.  Return the new array
*/

let nestedArr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multiplesOfThree = nestedArr.map((arr) => {
  return arr.filter((el) => el % 3 === 0);
});

// console.log(multiplesOfThree);

/*
15: Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.
*/

let nestArr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];
//[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

let sortedNestedArr = nestArr.sort((a, b) => {
  let oddSumA = a
    .filter((el) => el % 2 === 1)
    .reduce((sum, next) => sum + next);
  // console.log("a", oddSumA);

  let oddSumB = b
    .filter((el) => el % 2 === 1)
    .reduce((sum, next) => sum + next);
  // console.log("b", oddSumB);

  return oddSumA - oddSumB;
});

// console.log(sortedNestedArr);

/*
16: Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
*/

let fruitObj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

//capitalize function
let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

let fruitArray = Object.values(fruitObj).map((attributes) => {
  if (attributes["type"] === "fruit") {
    return attributes["colors"].map((color) => capitalize(color));
  } else {
    return attributes["size"].toUpperCase();
  }
});

// console.log(fruitArray);

/*
17: Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.
*/

let arrNums = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// let evenObj = { b: [2, 4, 6], c: [3, 6], d: [4] };
// let evenArr = Object.values(evenObj).map((arr) => {
//   return arr.filter((el) => el % 2 === 0);
// });

let evenArr = arrNums.filter((obj) =>
  Object.values(obj).every((subArr) => subArr.every((el) => el % 2 === 0))
);

// console.log(evenArr);

/*
18: Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second.
*/

let arrOfThings = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let arrToObj = Object.fromEntries(arrOfThings);
// console.log(arrToObj);

let newArrObj = {};
arrOfThings.forEach((subArr) => {
  let key = subArr[0];
  let value = subArr[1];
  newArrObj[key] = value;
});

// console.log(newArrObj);

/*
19: Create a deep copy of the munsters object, whose nested objects cannot be altered.
*/

let munstersObj = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

// let munstersObjCopy = { ...munstersObj };

let munstersObjCopy = {};

for (let prop in munstersObj) {
  munstersObjCopy[prop] = { ...munstersObj[prop] };
}

// console.log(munstersObjCopy);

// check launch school solution https://launchschool.com/lessons/ddd27b04/assignments/17514f23

/*
20: Write a function that takes no arguments and returns a string that contains a UUID.

UUID: Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
*/

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let sections = [8, 4, 4, 4, 12];
  let uuid = "";

  sections.forEach((section, sectionIndex) => {
    console.log(sectionIndex);

    for (let idx = 1; idx < section; idx++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }
    if (sectionIndex < sections.length - 1) {
      uuid += "-";
    }
  });
  return uuid;
}

// console.log(generateUUID());
