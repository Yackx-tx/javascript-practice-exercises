function factorialOfNumber(num) {
    let result = 1;
     if(num === 1 || num === 0){
        return 1;
     }
     if (num < 0) return 'Negative number does\'t have factorial.';

     let i = 2
     while(i <= num){
        result *= i;
        i++
     }
     return result;
}
console.log(factorialOfNumber(13));
