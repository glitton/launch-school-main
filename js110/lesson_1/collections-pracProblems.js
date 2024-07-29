// What is the return value of the filter method call below? Why?
[1, 2, 3].filter((num) => "hi");

/*
The return value of the filter method call is [1, 2, 3]

This filter method evaluates the truthiness of the return value of the callback.  
Since the return value is the string 'hi', it is truthy, therefore filter will 
return a shallow copy of the given array containing the original array, 1, 2, and 3.
*/

// What is the return value of the map in the following code? Why?
let numMap = [1, 2, 3].map((num) => {
  num * num;
});

console.log(numMap);
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
