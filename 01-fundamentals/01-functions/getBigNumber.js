function getBigNumber(numSet1, numSet2) {
    let numbers = [ ...numSet1, ...numSet2] ;

    let largerNumber = Math.max(...numbers);

    return largerNumber;
}

let set1 = [7,2,9];
let set2 = [15,28,42];



const getBigNum = getBigNumber(set1, set2);
console.log(getBigNum);
