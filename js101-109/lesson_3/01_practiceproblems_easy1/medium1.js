// Question 1: write a program that outputs The Flintstones Rock! 10 times,
// with each line indented 1 space to the right of the line above it.

//Input is The Flintstones Rock!
//Output is 10 The Flintstones Rock! each one having one indented space to the
//right
// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...
//First one is printed with out a space, second one has one space, third one, has
//two spaces ... 10th one has 9 spaces
//space is equal to the nth time the sentence is printed minus 1
//if sentence is the 8th time, there are seven spaces

// Data strucure are strings
//Algorithm:
//Create a loop that goes through a sequence 10 times
//Each time, add a space then the sentence The Flintstones Rock!

function repeatString(str, num) {
  const space = " ";
  for (let i = 0; i < num; i++) {
    console.log(space.repeat(i) + str);
  }
}

// repeatString("The Flintstones Rock!", 10);

// Question 2
function changeCase(str) {
  let newText = "";
  const lettersArray = str.split("");
  // console.log(lettersArray);
  lettersArray.map((letter) => {
    if (letter === letter.toUpperCase()) {
      newText += letter.toLowerCase();
    } else {
      newText += letter.toUpperCase();
    }
  });
  return newText;
}

let munstersDescription = "The Munsters are creepy and spooky.";
// console.log(changeCase(munstersDescription));

// Launch School solution
// console.log(
//   munstersDescription
//     .split("")
//     .map(function (char) {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join("")
// );

// Question 3:  Find a factor by dividing the number by each counting number starting with 1
// There should be no remainder
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

// console.log(factors(9));

// Question 4
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// push() function makes the changes in the original array but concat() creates a brand new array.
// It creates the new array and populates it with the elements from the other arrays.
// Due to this mechanism, the concat() function is slower than the push() function.

// Question 5
// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);

// Question 6
let nanArray = [NaN];

// console.log(nanArray[0] === NaN);
// console.log(isNaN(nanArray));

//Question 7
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer); // 42 + 8  = 50

// console.log(answer - 8); //34!  answer is still 42

// Question 8: Object gets mutated
//Question 9:

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// returns paper

// Question 10
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo()); // no
