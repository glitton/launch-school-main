//1.
function greet(name) {
  return `Hello, ${name}!`;
}

const greetings = ["Alice", "Bob", "Charlie"].map(greet);

//2.
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function (num) {
  return num * num;
});

//3.
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Outputs 10

//4.
const numbers = [10, 20, 30, 40];
const filtered = numbers.filter((num) => num > 20);

//5.
function doSomething(callback) {
  callback("Task completed!");
}

doSomething(function (message) {
  console.log(message);
});

/*
For example 1, the map method is a higher-order function as it uses the greet function as an argument. 

Example 2, the map method is a higher-order function as it accepts the function (num) as an argument.  In addition function(num) is a callback function as it is a function passed to another function.

Example 3's createMultiplier function is a higher-order function as it returns another function.  The function(number) anonymous function is a callback function.

For example 4, the filter method is a higher-order function as it accepts another function as an argument.  In addition, the anonymous function num => num > 20 is a callback function.

In example 5, doSomething is a higher-order function as it returns another function while callback is a callback function as it is a function within another function.
*/
