//Strategy #1: Remove duplicates from an array

let numbersArray = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6];

function removeDuplicates(arr) {
  let result = arr.filter((el, index) => {
    if (arr.indexOf(el) === index) {
      // console.log(arr.indexOf(el));
      return el;
    }
  });
  return result;
}

console.log(removeDuplicates(numbersArray));

//6. Practice Finding if One Arr contains a Char from another Arr, then removing that Char
function findAndRemove(arr1, arr2) {
  let testArr = [];

  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];

    if (arr1.includes(num)) {
      testArr.push(num);
      let index = arr1.findIndex((ele) => ele === num);
      arr1.splice(index, 1); // good to study
    }
  }

  return testArr;
}
console.log(findAndRemove([1, 2, 3, 4, 5], [1, 2, 2, 3, 5])); //[1, 2, 3, 5]

//#2 Make a copy using slice, concat
