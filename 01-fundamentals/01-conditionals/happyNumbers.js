/* According to Wikipedia a happy number is defined by this process:
   Replace a number by the sum of the squares of its digits.
   Repeat until the number becomes 1, or it loops without reaching 1. */

let numberToTest = 23;
let current = numberToTest;
let seenNumbers = [];

while (current !== 1 && seenNumbers.indexOf(current) === -1) {
    seenNumbers.push(current);
    let nextValue = 0;
    
    while (current > 0) {
        let digit = current % 10;
        nextValue += digit * digit;
        current = Math.floor(current / 10);
    }

    current = nextValue;
}

if (current === 1) {
    console.log(numberToTest + ' is a happy number.');
} else {
    console.log(numberToTest + ' is not a happy number.');
}

