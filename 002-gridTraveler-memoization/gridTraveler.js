const gridTraveler = (m, n, memo={}) => {
     // are the args in the memo?
     const key = m + "," + n
     if (key in memo) return memo[key];

    // one base case is when we have a one by one grid, return 1
    // another base case is row or column is zero, which means an empty grid
     if ( m === 1 && n === 1) return 1;
     if ( m === 0 || n === 1) return 0;

     // going downward and going rightward
     memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
     return memo[key]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))