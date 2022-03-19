const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return [targetSum];
    
    // base case
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    // we return false after the for loop because we only know that after I attempted ALL possibilities
    // and I found that none of them worked out can I actually say that it is impossible to generate the `targetSum`
    memo[targetSum] =false;
    return false;
}

console.log(canSum(7, [2, 3]));  // true
console.log(canSum(7, [5, 3, 4, 7]));  // true
console.log(canSum(7, [2, 4]));  // false
console.log(canSum(8, [2, 3, 5]));  // true
console.log(canSum(300, [5, 3]));  // false    