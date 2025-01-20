/*Write a function that takes an object and returns a new object where the keys and values are swapped. If a value appears multiple times, only use it as a key once.

Example:
Input: { a: 1, b: 2, c: 3, d: 1 }
Output: { '1': 'a', '2': 'b', '3': 'c' }

*/

// function swap(obj) {
//   let finalObj = {};
//   let keyValues = Object.entries(obj);
//   keyValues.forEach((keyValue) => {
//     let newKey = keyValue[1];
//     let newValue = keyValue[0];
//     if (!finalObj[newKey]) {
//       finalObj[newKey] = newValue;
//     }
//   });
//   return finalObj;
// }

// Another way using reduce
function swap(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }
    return acc;
  }, {});
}

console.log(swap({ a: 1, b: 2, c: 3, d: 1 })); // { '1': 'a', '2': 'b', '3': 'c' }
