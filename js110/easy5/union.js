function copyUniqueValues(resultArray, array) {
  array.forEach((value) => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(arr1, arr2) {
  let finalArray = [];
  copyUniqueValues(finalArray, arr1);
  copyUniqueValues(finalArray, arr2);
  return finalArray;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union([2, 3, 5, 10], [3, 6, 9])); //
