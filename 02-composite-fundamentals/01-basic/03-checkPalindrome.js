/**
 * 3. Check if a String is a Palindrome
 * Write a JavaScript function to check if a given string is a palindrome.
 */

function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reverse = cleaned.split('').reverse().join('');
  if(cleaned === reverse){
    return true;
  }
  return false;
}

console.log(isPalindrome('mam madam mam'));
console.log(isPalindrome('hello'));
