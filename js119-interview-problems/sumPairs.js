/*P: Given a list of integers and a single sum value, return the first two values in order of appearance that add up to form the sum.
If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
input: array, integer representing the sum
output: array that contains a pair of numbers that add up to the sum
rules:
  - if there are two or more pairs that add up to the sum, return the pair whose second element has the lower index

E: 4,2 and 3,3. but 2 has the lower index [4,2]

D: array, integer

A:
Initiate an empty var `resultPair`
Initiate `secondIndex` equal to arr.length - 1
Iterate over the array using a nested loop
  get a `currentPair` assign to arr at index i and arr at index j
  Check if the `currentPair` is equal to the input sum
    set `currentIndex` to j
      if `currentIndex is less than `secondIndex`
      reassign `secondIndex` = `currentIndex`
      assign `currentPair` to `resultPair`
return `resultPair`    
*/

function sumPairs(arr, sum) {
  let resultPair = [];
  let secondIndex = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let currentPair = [arr[i], arr[j]];
      let currentPairSum = currentPair.reduce((acc, curr) => acc + curr, 0);

      if (currentPairSum === sum) {
        let currentIndex = j;
        if (currentIndex < secondIndex) {
          secondIndex = currentIndex;
          resultPair = currentPair;
        }
      }
    }
  }
  return resultPair;
}

console.log(sumPairs([4, 3, 2, 3, 4], 6)); //[4,2]
console.log(sumPairs([4, 3, 2, 3, 4], 7)); //[4,3]
console.log(sumPairs([4, 5, 1, 2, 3, 4, 6], 7)); //[5, 2]

/*
4,3 indexes ar 0, 4
currentPair [4,3] secondIndex = 4
5,2 indexes are 1, 3 currrentIndex = 3
secondIndex = 3
*/
