// Question #1:
// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

numbers.length = 0;
numbers.splice(0, numbers.length);
while (numbers.length) {
  numbers.pop();
}

//for loop doesn't work cause numbers.length changes with every pop()
// for (let i = 0; i < numbers.length; i++) {
//   let newArray = numbers;
//   newArray.pop();
//   console.log(numbers);
// }

// Question #3: The + operator coerces the arrays to strings then concatenates them
// console.log([1, 2, 3] + [4, 5]); //1,2,34,5

// Question #3:
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
// console.log(str1);

// Question 4:
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
// console.log(arr1);

// Question 5:
// const isColorValid = (color) => color === "blue" || color === "green";
// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }
const isColorValid = (color) => ["blue", "green"].includes(color);
console.log(isColorValid("blue"));

// const generateArr = (startNumber, endNumber) => {
//   let finalArray = [];
//   for (let i = startNumber; i <= endNumber; i++) {
//     finalArray.push(i);
//   }
//   return finalArray;
// };

// console.log(generateArr(3, 8));

// Question 6: REVIEW THIS
let arr = [1, 2, 3]; //object
let newArr = arr; //object

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2; //primitive number
}

double(newNum);

//variables are 1) arr on line 53, 2) newArr on line 54, 3) num on line 56,
// 4) newNum on line57, 5) double on 59 and 6) num on 60
//primitive values are 1,2,3 (3 elements of the array), line 56 num and 0 of num[0] (4,5)
// newNum is another primitive, assigned to num (6),
