// str = "The grass is green";

// console.log(str.slice(4, 9));
// console.log(str.slice(4));

// let arr = ["a", "b", "c", "d", "e", "f", "g"];

// let newArray = arr.slice();
// newArray.push("bennie");
// console.log(arr);
// console.log(newArray);

// let arr = ["a", "b", "c", "d", "e", "f"];
// arr = arr.join(""); // => 'a,b,c,d,e,f'
// console.log(arr);

function increase(arr) {
  // arr.forEach((element) => element + 1);
  // return arr;
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
    finalArr.push(arr[i]);
  }
  return finalArr;
}

let numbers = [1, 2, 3, 4];

// console.log(increase(numbers));
let notANumber = numbers[4] + 1;
console.log(notANumber);
