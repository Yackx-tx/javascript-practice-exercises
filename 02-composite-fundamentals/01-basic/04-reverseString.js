/*
 4. Reverse a Given String
  Write a JavaScript program to reverse a given string.
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));
console.log(reverseString('JavaScript'));
