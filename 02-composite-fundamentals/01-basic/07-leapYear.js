/**
 * 7. Check if a Given Year is a Leap Year
 * Write a JavaScript function to check if a given year is a leap year.
 *
 * Leap year rules:
 * - Divisible by 4 AND not divisible by 100, OR
 * - Divisible by 400
 */

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;

}



// Test cases
console.log(isLeapYear(2020));
