// Fn = Fn-1 + Fn-2
function fibonacciGenerator(k) {
    let fib = [0, 1];

    let n = 2;

    while(n < k){
        fib[n] = fib[n-1] + fib[n-2];
         n++
    }
    return fib;
}
console.log(fibonacciGenerator(5));
