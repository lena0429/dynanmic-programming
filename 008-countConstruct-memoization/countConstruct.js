const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === "") return 1;

    let totalCount = 0;

    for (word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest
        }
    }
    memo[target] = totalCount;
    return totalCount;
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('stakeboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))