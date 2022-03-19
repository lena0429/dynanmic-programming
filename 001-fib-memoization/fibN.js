
// the memo object is going to store n as the key, the return value as the value
const fib = (n, memo = {}) => {
    // step 1 - check existence inside of our memo
    // if it is in our memo, i am going to return that value
    if (n in memo) return memo[n];
   
    if (0 < n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(50))
console.log(fib(0))


