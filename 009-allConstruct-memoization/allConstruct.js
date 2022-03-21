const allConstruct = (target, wordBank) => {
    // base case
    if (target === '') return [[]];

    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length); // return the remaining of the word
            const suffixWays = allConstruct(suffix, wordBank); // 2D array
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    return result; 
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purl']))

// allConstruct('hello', ['cat', 'dog', 'mouse']) => [] (this represents the outer collection)
// allConstruct('', ['cat', 'dog', 'mouse']) => [[]] (this means there is one way to construct the target, we call this 2d empty array)