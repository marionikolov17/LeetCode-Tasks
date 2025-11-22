/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;

    for (let i = s.length - 1; i > start; i--) {
        const current = s[i];
        const prev = s[start];

        s[start] = current;
        s[i] = prev;

        start++;
    }
};