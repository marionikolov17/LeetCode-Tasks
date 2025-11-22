/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        const count = map.get(s[i]) || 0;
        map.set(s[i], count + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }

    return -1;
};