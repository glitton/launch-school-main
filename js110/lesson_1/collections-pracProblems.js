// What is the return value of the filter method call below? Why?
[1, 2, 3].filter((num) => "hi");

/*
The return value of the filter method call is [1, 2, 3]

This filter method evaluates the truthiness of the return value of the callback.  
Since the return value is the string 'hi', it is truthy, therefore filter will 
return a shallow copy of the given array containing the original array, 1, 2, and 3.
*/

/* CHAT GPT

The code [1, 2, 3].filter((num) => "hi"); will return a new array containing 
all the elements from the original array [1, 2, 3]. 

The callback function (num) => "hi" is used to test each element of the array. 
This function ignores its input (num) and always returns the string "hi".
In JavaScript, a non-empty string (like "hi") is considered a truthy value.
Since the function returns a truthy value for every element, all elements will 
pass the test. Therefore, the return value of the filter method call is [1, 2, 3].

*/

// What is the return value of the map in the following code? Why?
let numMap = [1, 2, 3].map((num) => {
  num * num;
});

// console.log(numMap);
/*
The map method returns [ undefined, undefined, undefined ]

The map method uses the return value of the callback to perform 
transformation on each of the elements in the array.  However, the method
doesn't use an explicit return statement in the callback thus the callback returns
undefined for each of the return values of the 3 elements.  
*/

let otherMap = [1, 2, 3].map((num) => num * num);
// console.log(otherMap);

/*
The map method returns [ 1, 4, 9 ]

The map method uses the return value of the callback to perform 
transformation on each of the elements in the array. In this case, the callback 
returns each element multiplied by itself. 

Without curly braces surrounding the 
body of the arrow function, JavaScript implicitly returns the computed value of 
num * num.  Thus it returns 1, 4, 9 on the three iterations.  

*/

// let animals = ["ant", "bear", "caterpillar"].pop().length;

/*
The return value is 11.

The pop method is being called on array which destructively removes the last element
which is caterpillar and returns it.  The length property is being accessed on
the return value of pop which is caterpillar.  Its length is 11.  
*/

// What is the callback's return value in the following code?
// Also, what is the return value of every in this code?

let numArray = [1, 2, 3].every((num) => {
  num = num * 2;
  // console.log(num);
  return num;
});

console.log(numArray);
/*
The callback's return value is 2, 4 and 6 on their respective iterations while the 
return value of every is true.

The expression num = num * 2 assigns each element of the array to the right hand 
side so for each iteration, the return value, num, will be assigned to 
the evaluation of  1 * 2, 2 * 2 and 3 * 2 which is 2, 4, and 6.  The every method
tests whether the array elements pass the test implemented by the callback function and
returns a boolean value.  Since the return values are all truthy, every returns
true.
 */

// How does Array.prototype.fill work? Is it destructive? How can we find out?
// let arr = [1, 2, 3, 4, 5];

// let modifiedArray = arr.fill(1, 1, 5);
// console.log(arr);
// console.log(modifiedArray);

/*
Array.prototype.fill changes the elements of an array to a static
value within a range of indices.  The method accepts up to three parameters:
value, index start, index end.  The start and end indices are optional.  If the
end index is not specified, the value to fill the array will start from the start
index until the end.  If no indices are provided, all the elements in the array
will be filled with the specified value.

Array.prototype.fill is a destructive method in that it mutates the 
original array and returns the modified array.  To show that this is a destructive 
method, assign the return value of fill to a new variable.  Logging the original
array and the newly modified array should output the same mutated array.  

*/

// What is the return value of map in the following code? Why?

let animals = ["ant", "bear"].map((elem) => {
  if (elem.length > 3) {
    return elem;
  }
});

console.log(animals);
