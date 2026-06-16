let arr1=[3, 'a', 'a', 'a', 2, 3, 3, 3, 3, 3, 'a', 3, 'a', 2, 4, 9, 3];
 function dominantElement(input) {
    let score = {};
    let counts = 0;
    let mostFrequent = input[0];

    input.forEach((item) => {
        if(!score[item]) {
            score[item] = 1;
        } else{
            score[item]++
        }

        if(score[item] > counts){
            counts = score[item];
            mostFrequent = item;
        }
    });
    return mostFrequent +': ('+ counts +').';
 }
 console.log(dominantElement(arr1));
