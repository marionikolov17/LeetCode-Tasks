/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();

    if (s.length !== t.length) return false;

    for (const char of s) {
        const count = map.get(char);

        if (map.has(char)) {
            map.set(char, count + 1);
        } else {
            map.set(char, 1);
        }
    }

    for (const char of t) {
        if (!map.has(char)) continue;

        const value = map.get(char);

        if (value <= 1) {
            map.delete(char);
        } else {
            map.set(char, value - 1);
        }
    }

    return map.size === 0;
};

console.log(isAnagram("anagram", "nagaram"));