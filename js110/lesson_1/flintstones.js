/*
Problem:
Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

Input: array
Output: Object where the names are the keys and the values are its indices or positions in the array

Examples/Test Cases: output is
{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

Data Structure: Array and Object

Algorithm:
1.  Create an empty object
2.  Iterate over the input array
3.  Assign each element of the array as the key to the object and its index as the value.  Continue until the end of the array
4.  Return the object
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function arrayToObject(array) {
  let finalObject = {};

  for (let idx = 0; idx < flintstones.length; idx++) {
    // console.log(idx);
    let currentElement = flintstones[idx];
    // console.log(currentElement);
    finalObject[currentElement] = idx;
    // console.log(finalObject);
  }
  return finalObject;
}

console.log(arrayToObject(flintstones));

//Launch School solution
let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
