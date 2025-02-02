/* 19.

P: Write a function that takes an object and returns a new object where the keys and values are swapped. If a value appears multiple times, only use it as a key once.
input: object
output: object

Example:
Input: { a: 1, b: 2, c: 3, d: 1 }
Output: { '1': 'a', '2': 'b', '3': 'c' }

D: input object, intermediate array???
A:
 - make an array of the entries of the argument object (`argObj') 
 - initialise `resObj` to {}
 -iterate through the entries array:
 -- if a key of the current value does not exist in `resObj`. add a key of the value, with the value being the current key
 - after iteration, return `resObj'
*/

function swap(obj) {
  let swappedObj = {};
  let objArray = Object.entries(obj);

  objArray.forEach((arr) => {
    if (!swappedObj.hasOwnProperty(arr[1])) {
      swappedObj[arr[1]] = arr[0];
    }
  });
  return swappedObj;
}

console.log(swap({ a: 1, b: 2, c: 3, d: 1 })); //{ '1': 'a', '2': 'b', '3': 'c' }
