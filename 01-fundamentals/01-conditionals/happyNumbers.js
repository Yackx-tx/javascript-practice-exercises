/* A happy number is defined by this process:
   Replace a number by the sum of the squares of its digits.
   Repeat until the number becomes 1, or it loops without reaching 1. */

let numberToTest = 23;
let current = numberToTest;
let seenNumbers = [];

while (current !== 1 && seenNumbers.indexOf(current) === -1) { /*indexOf returns -1 if it can't find the item */
    seenNumbers.push(current);
    let nextValue = 0;

    while (current > 0) {
        let digit = current % 10; /* gets the remainder */
        nextValue += digit * digit; /* squares that digit */
        current = Math.floor(current / 10);
    }

    current = nextValue;
}

if (current === 1) {
    console.log(numberToTest + ' is a happy number.');
} else {
    console.log(numberToTest + ' is not a happy number.');
}

// simulation:
// Digit 1:
// 23 % 10 gives 3.
// nextValue becomes 0 + (3 x 3) = 9
// current becomes Math.floor(23 / 10) = 2
// Digit 2:
// 2 % 10 gives 2.
// nextValue becomes 9 + (2 x 2) = 13
// current becomes Math.floor(2 / 10) = 0 (Inner loop ends).

