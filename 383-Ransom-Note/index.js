/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for (const letter of ransomNote) {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) + 1)
        } else {
            map.set(letter, 1);
        }
    }

    for (const letter of magazine) {
        if (!map.has(letter)) continue;

        const letterCount = map.get(letter);

        if (letterCount <= 1) {
            map.delete(letter)
        } else {
            map.set(letter, letterCount - 1);
        }
    }

    return map.size === 0;
};

canConstruct("a", "b");
canConstruct("aa", "aab");