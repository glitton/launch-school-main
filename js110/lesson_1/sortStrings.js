function sortStringsByConsonants(strings) {
  let stringsCopy = strings.slice();

  let sortedStrings = stringsCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a);
  });
  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  let CONSONANTS = "bcdfghjklmnpqrstvwxyz";
  let newString = string.split(" ").join("");
  let tempString = "";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (CONSONANTS.includes(newString[i])) {
      tempString += newString[i];
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
      }
    } else {
      tempString = "";
    }
  }
  return count;
}

// console.log(countMaxAdjacentConsonants("dddaa")); // 3
// console.log(countMaxAdjacentConsonants("ccaa")); // 2
// console.log(countMaxAdjacentConsonants("baa")); // 0
// console.log(countMaxAdjacentConsonants("aa")); // 0

let list1 = ["aa", "baa", "ccaa", "dddaa"];
// console.log(sortStringsByConsonants(list1));
// // ['dddaa', 'ccaa', 'aa', 'baa']

// let list2 = ["can can", "toucan", "batman", "salt pan"];
// console.log(sortStringsByConsonants(list2));
// // ['salt pan', 'can can', 'batman', 'toucan']

// let list3 = ["bar", "car", "far", "jar"];
// console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ["day", "week", "month", "year"];
console.log(sortStringsByConsonants(list4));
// console.log(countMaxAdjacentConsonants("month"));
// ['month', 'day', 'week', 'year']
