/**
 * 8. Find the Sum of All Elements in an Array
 * Write a JavaScript program to find the sum of all elements in an array.
 */

function sumArray(array) {
  return array.reduce((sum, num) => sum + num, 0);
}


// Test cases
console.log(sumArray([1, 2, 3, 4, 5]));
