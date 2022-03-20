const howSum = (targetSum, numbers, memo={}) => {
    // check the existence of the key in memo
    if (targetSum in memo) return memo[targetSum];
    // the base case for 0 is to return an empty array
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    // below is for the branching logic
    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo)
            if(remainderResult !== null) {
                memo[targetSum] = [...remainderResult, num]
                return memo[targetSum];
            }
        }
    memo[targetSum] = null;    
    return null;

}

console.log(howSum(7, [2, 3]));  // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7]));  // [4, 3]
console.log(howSum(7, [2, 4]));  // null
console.log(howSum(8, [2, 3, 5]));  // [2, 2, 2, 2]
console.log(howSum(300, [500, 31]));  // null    