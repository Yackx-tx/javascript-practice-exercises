/*Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.
*/
let arr_1 = [4, 6, 7];
let arr_2 = [8, 1, 9];

let sumArray = [];

for(let i = 0; i < arr_1.length; i++) {
    sumArray.push(arr_1[i] + arr_2[i]);
}
console.log(sumArray)
