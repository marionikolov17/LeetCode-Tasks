/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    const res = [words[0]]
    let index = 0;

    for (let i = 1; i < words.length; i++) {
        if (words[i] !== words[index] && groups[i] !== groups[index]) {
            res.push(words[i]);
            index = i;
        }
    }

    return res;
};