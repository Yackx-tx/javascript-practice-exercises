let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let sumOffArrays = [];
let maxLength = Math.max(arr_1.length, arr_2.length);

for(let i = 0; i < maxLength; i++) {
    let num1 = arr_1[i];
    let num2 = arr_2[i];
    sumOffArrays.push(num1 + num2);
}
// console.log(maxLength);
console.log(sumOffArrays);

