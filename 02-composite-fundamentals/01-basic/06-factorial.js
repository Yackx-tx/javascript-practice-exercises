/**
 * 6. Find the Factorial of a Number
 * Write a JavaScript program to find the factorial of a number.
 */

function factorial(num) {
  if(num === 1 || num === 0) return 1;
  if(num < 0) return null;
  let result = 1;
  for(let i = 2; i <= num; i++){
    result *= i;

  }
  return result;
}

// Test cases
console.log(factorial(9));
