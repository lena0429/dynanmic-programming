const fibTabulation = (n) => {
    const table = Array(n + 1).fill(0); // because indices start at 0;
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i]
        table[i + 2] += table[i]
    }
    return table[n];
}

console.log(fibTabulation(6));
console.log(fibTabulation(7));
console.log(fibTabulation(8));
console.log(fibTabulation(50));


// O(n) time
// O(n) space

const fib = (n) => {
    if (0 < n <= 2) return 1;
    
    const result = fib[n - 1] + fib[n - 2]
    return result
}