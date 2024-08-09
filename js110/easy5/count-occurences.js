/*
Problem: Write a function that counts how many times an element appears in an array.
Once counted log each element and the number of times it appears in the array.  

Examples/Test Cases:
Input: Array
Output: Log to the console, the element and number of times it occurs
Explicit Rules: 
- elements are words
- elements are case sensitive (SUV !== suv)

Data Types/Structure:
Array, object, string

Algorithm:
1.  Initiate an empty object to store the vehicle as the key and the number of
occurrences as the value
2.  Initiate a count variable to keep track of the occurrences
3.  Iterate over the array
4.  Check if the element in the current index is a property in the object
5.  If it isn't, add it to the object, increment count variable
6.  If the property is present, assign count variable to the object property's value,
then increment it by one
7.  Log the key/value pairs of the object to the console
*/

function countOccurrences(vehicles) {
  let vehicleOccurrences = {};

  for (let idx = 0; idx < vehicles.length; idx += 1) {
    let currentVehicle = vehicles[idx];
    if (!vehicleOccurrences[currentVehicle]) {
      vehicleOccurrences[currentVehicle] =
        vehicleOccurrences[currentVehicle] || 0;
      vehicleOccurrences[currentVehicle] += 1;
    } else {
      vehicleOccurrences[currentVehicle] += 1;
      // console.log(vehicleOccurrences);
    }
  }
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

// let vehicles = ["car", "car", "truck", "car"];
countOccurrences(vehicles);
