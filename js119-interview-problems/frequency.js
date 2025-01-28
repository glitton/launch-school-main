let string3 = "scintillates";

let freqObj = {};

// for (let idx = 0; idx < string3.length; idx++) {
//   let currLett = string3[idx];
//   if (freqObj.hasOwnProperty(currLett)) {
//     freqObj[currLett] += 1;
//   } else {
//     freqObj[currLett] = 1;
//   }
// }

// let strArray = string3.split("");

// strArray.forEach((letter) => {
//   freqObj[letter] = (freqObj[letter] || 0) + 1;
// });

// for (let idx = 0; idx < string3.length; idx++) {
//   if (!freqObj[string3[idx]]) {
//     freqObj[string3[idx]] = 1;
//   } else {
//     freqObj[string3[idx]]++;
//   }
// }

for (let idx = 0; idx < string3.length; idx++) {
  freqObj[string3[idx]] = (freqObj[string3[idx]] || 0) + 1;
}

console.log(freqObj);
