// A palindrome is word, phrase, or sequence that reads the same backward as forward
// Javascript program that checks if a string is palindrome.
function palindromeCheck(stringInput) {
    let str = stringInput.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    let count = 0;
    // check if the legnth of string is odd or even
    if (str.length % 2 === 0) {
        count = str.length / 2;
    } else {
        if (str.length === 1) {
            console.log('The string entered is palindrome');
            return true;
        } else {
            count = (str.length - 1) / 2;
        }
    }

    for (let i = 0; i < count; i++) {
        if (str[i] != str.slice(-1 - i)[0]) {
            console.log('The string entered is not palindrome');
            return false;
        }
    }
    console.log('The string entered is palindrome');
    return true;

}

palindromeCheck('Mad#am');
