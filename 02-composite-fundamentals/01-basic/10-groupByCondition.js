/**
 * 10. Group Elements in an Array Based on a Given Condition
 * Implement a function that groups elements in an array based on a given condition (e.g., even/odd).
 */


function groupEvenOdd(array) {
  return {
    even: array.filter(num => num % 2 === 0).join(''),
    odd: array.filter(num => num % 2 !== 0).join('')
  }

}


// Test cases
console.log(groupEvenOdd([1, 2, 3, 4, 5, 6, 7, 8]));
