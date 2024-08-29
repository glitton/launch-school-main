//Parse a string using slice
let str = "abc abc";

console.log(str.split()); //["abc abc"]
console.log(str.split("")); //['a', 'b', 'c', '','a', 'b', 'c',]
console.log(str.split(" ")); //["abc", "abc"]
console.log(str.split("b")); //['a', 'c a', 'c']
