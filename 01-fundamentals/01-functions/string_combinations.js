function getStrCombinations(str) {
    let combArray = []

    for(let i = 0; i < str.length; i++) {

        for(let j = i + 1; j <= str.length; j++){
            combArray.push(str.slice(i, j));
        }
    }
    return combArray;
}

console.log(getStrCombinations('yannick'));

