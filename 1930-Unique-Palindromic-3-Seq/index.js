/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const map = new Map();
    let combinations = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];

        if (map.has(char)) continue;

        let latestPosition = i - 1;
        let count = 0;

        for (let j = i - 1; j >= 0; j--) {
            if (s[j] === char) {
                latestPosition = j;
                count++;
            }
        }

        const set = new Set(s.substring(latestPosition, i));

        if (latestPosition !== i && set.size > 0) combinations += count > 1 ? set.size : set.size - 1;

        map.set(char, true);
    }

    return combinations;
};

console.log(countPalindromicSubsequence("ckafnafqo"));