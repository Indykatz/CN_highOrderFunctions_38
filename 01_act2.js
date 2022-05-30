// The array method .map is an example of a higher-order function
// declare a var with 5 numbers then use .map to iterate through the array and multiply each array item by 3

// the array of variables
const numArray = [1, 2, 3, 4, 5];

// the .map method creates a new array propulated with the results of calling a provided function on every element on the calling array
// taking each array item (x) x * 3
const theMap = (anArray) => {
  return anArray.map((x) => x * 3);
};

// print
console.log(theMap(numArray));
