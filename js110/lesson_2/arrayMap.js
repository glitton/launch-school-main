const arrTrans = [
  [1, 2],
  [3, 4],
].map((arr) => {
  // console.log(arr[0]);
  let newArr = arr[0];

  return newArr;
});

// console.log(arrTrans);

// [
//   [1, 2],
//   [3, 4],
// ].map((arr) => {
//   console.log(arr[0]);
//   return arr[0];
// });

/*
ACTION             Performed On     Side Effect     Return Value        Is Return Value Used?
method call (map)  Outer array      None            New arr [1, 3]      No

callback           Each sub-array   None            Element at 0 index  Yes, by map
el access [0]      Each sub-array   None            Element at 0 index  Yes, by console.log

method call 
console.log        El at 0 index   Outputs a string undefined           No

el [0]             Each subarray   None            El at index 0        Yes, returned by callback


*/

let myArr = [
  [18, 7],
  [3, 12],
].forEach((arr) => {
  return arr.map((num) => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

console.log(myArr);

/*
ACTION                 Performed On      Side Effect    Return value    Is Return Value Used
method call, forEach   Outer Array       None           new array       Yes, for the map method

callback               Each sub-array    None           num > 5         Yes for console.log

method call, map       Each sub-array    None           num > 5         Yes for console.log

if num > 5         Each el of sub-array  None           console.log      Yes, explicit return for forEach

console.log(num) El that meets condition None           num > 5          console.log 

*/
