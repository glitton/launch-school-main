// Question 1

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

// console.log(first());
// console.log(second());

//Question 2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object);
// {
//   first: [1, 2];
// }

// Question 3
// A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three); // once invoked, vars take on new values

// console.log(`one is: ${one}`);
// // console.log(typeof one);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// Question 4: identify all of the variables, primitive values, and objects

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!"; //3 string
  console.log(myBoo); //1 string
}

const halloweenCollection = {
  //6 strings
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};
//function returns undefined which is another primitive, 1
// let myBoo = boo(halloweenCollection["greet"]); // passing string by reference and greet string, 2

//Variables: function boo, scare parameter, myBoo, halloweenCollection, let myBoo => 5
//Primitive values:
//Objects: {greet: ...}, halloweenCollection["greet"] => 2

// Question 5
// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   console.log(dotSeparatedWords);
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       break;
//     }
//   }

//   return true;
// }

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  // console.log(dotSeparatedWords);
  if (dotSeparatedWords.length !== 4) {
    console.log("Invalid input");
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

// console.log(isAnIpNumber("hello.2.45"));
console.log(isDotSeparatedIpAddress("hello.2.45"));
