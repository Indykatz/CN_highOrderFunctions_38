// test function to ensure it works by passing a number to the doMaths function
// The passing a number and one of the four maths functions to the returned function

// add
const add = (a, b) => {
  return a + b;
};
// subtract
const subtract = (a, b) => {
  return a - b;
};
// multiply
const multiply = (a, b) => {
  return a * b;
};
// divide
const divide = (a, b) => {
  return a / b;
};
// do maths function
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

// do maths function calling add
console.log(doMaths(3)(5, add));
// do maths function calling subtract
console.log(doMaths(3)(5, subtract));
// do maths function calling multiply
console.log(doMaths(3)(5, multiply));
// do maths function calling divide
console.log(doMaths(3)(5, divide));
