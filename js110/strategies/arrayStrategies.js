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
