/**
 * 9. Find the Second Largest Number in an Array
 * Implement a function that finds the second largest number in an array.
 */

function findSecondLargest(array) {
  if(array.length < 2) return  null;

  let secondMax = [...array].sort((a, b) => b - a);

  let secondLargest = secondMax[1];

  return secondLargest;
}

// Test cases
console.log(findSecondLargest([10, 5, 20, 15]));
