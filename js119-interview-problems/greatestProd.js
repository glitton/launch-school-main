/*
P:Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.
input: string of digits
output: integer that represent the max product of 4 consecutive numbers
rules
- multiply 4 consecutive numbers
E:
D: string, integer, 
A: 
Initialize maximumProduct variable, assign to 1
Iterate over the string until length - 4
  - get first slice: index 0 through 4, get the product assign to currentProduct
    - if currentProduct is greater than maxProduct, 
    - reassign maxProduct = currentProduct
  - repeat until the end of the loop
Return maxProduct

C: 
*/

function greatestProduct(stringIntegers) {
  let maxProduct = 1;

  for (let idx = 0; idx < stringIntegers.length - 3; idx++) {
    let currentSlice = stringIntegers.slice(idx, idx + 4);
    let currentProduct = currentSlice
      .split("")
      .reduce((curr, acc) => Number(curr) * Number(acc), 1);
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }
  return maxProduct;
}
const p = console.log;
p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6

// The above tests should each print true.
