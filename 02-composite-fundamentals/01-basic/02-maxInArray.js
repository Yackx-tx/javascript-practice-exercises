/**
 * 2. Maximum Number in an Array
 * Write a JavaScript program to find the maximum number in an array.
 */

function findMax(array) {
   return Math.max(...array);
}


// Test cases
console.log(findMax([3, 7, 2, 9, 1]));
