// Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

let newArr = [];

for(let counter = arr.length - 1; counter >= 0; counter--){
    newArr.push(arr[counter]);
}
console.log(newArr);

