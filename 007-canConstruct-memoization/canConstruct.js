const canConstruct = (target, wordBank, memo={}) => {
    // check the existence of the key in the memo
    if (target in memo) return memo[target];

    // base case is to check if the target is empty
    if (target === "") return true;

    // make my recursive call in a way where my target string gets progressively smaller and smaller
    // toward this empty string (my base case)
    for (let word of wordBank){
        // first to check if the word if prefix of my target
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);   // "target".slice(3) => "get"
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct('abcdef', ["ab", "abc", "cd", "def", "abcd"]))
