// What is the output of this code and why?

const numbers = [1, 2, 3];

function modifyArray(arr) {
  arr.push(4); // append 4 to the end
  arr = [5, 6, 7]; // reassign array
  arr.push(8); // append 8 to arr
  console.log(arr);
}

console.log(modifyArray(numbers)); //
console.log(numbers); //

/*
The output of invoking modifyArray with numbers as the argument outputs undefined.  Logging the numbers array to the console logs 
[1,2,3,4]

The modifyArray function returns undefined because it doesn't explicitly return anything.

The reason the numbers array logs [1,2,3,4] is because when the modifyArray function is invoked with the numbers array argument passed by reference, the arr argument points to the numbers array.  The value of arr is the same as numbers which is [1,2,3].
Then the push method, is executed passing the value of 4 resulting in numbers being mutated to [1,2,3,4].

Then the function reassigns arr to [5,6,7] which at this point is not the same as numbers.  We now have two different arrays, arr and numbers.  Using the push method on arr doesn't affect the numbers array.  As a result, logging numbers outputs [1,2,3,4]

*/
