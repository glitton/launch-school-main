// function leadingSubstrings(str) {
//   let subStringArray = [];

//   for (let i = 1; i < str.length + 1; i += 1) {
//     let substring = str.substring(0, i);
//     subStringArray.push(substring);
//   }

//   return subStringArray;
// }

//Launch School uses slice

// function leadingSubstrings(str) {
//   let substrings = [];

//   for (let length = 1; length <= str.length; length += 1) {
//     substrings.push(str.slice(0, length));
//   }
//   return substrings;
// }

//Using Map
function leadingSubstrings(str) {
  return str.split("").map((_, index) => str.slice(0, index + 1));
}

//Using reduce
function leadingSubstrings(str) {
  return str.split("").reduce((substrings, _, index) => {
    substrings.push(str.slice(0, index + 1));
    return substrings;
  }, []);
}

console.log(leadingSubstrings("abc"));
console.log(leadingSubstrings("a"));
console.log(leadingSubstrings("xyzzy"));
