// javascript function that reverse a number
const reverseNum = (num) => {
    num = num + '';

    return num.split('').reverse().join('');
}
let NumberToReverse = reverseNum(2026);
console.log(NumberToReverse);
