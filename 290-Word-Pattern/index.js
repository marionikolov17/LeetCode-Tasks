/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    const firstMap = new Map();
    const secondMap = new Map();

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i];
        const word = words[i];

        if (firstMap.has(letter)) {
            const value = firstMap.get(letter);

            if (value !== word) return false;
        } else {
            firstMap.set(letter, word);
        }

        if (secondMap.has(word)) {
            const value = secondMap.get(word);

            if (value !== letter) return false;
        } else {
            secondMap.set(word, letter);
        }
    }

    return true;
};

console.log(wordPattern("abc", "b c a"));