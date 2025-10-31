/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const firstMap = new Map();
    const secondMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const firstChar = s[i];
        const secondChar = t[i];

        if (firstMap.has(firstChar)) {
            const value = firstMap.get(firstChar);

            if (value !== secondChar) return false;
        } else {
            firstMap.set(firstChar, secondChar);
        }

        if (secondMap.has(secondChar)) {
            const value = secondMap.get(secondChar);

            if (value !== firstChar) return false;
        } else {
            secondMap.set(secondChar, firstChar);
        }
    }

    return true;
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));