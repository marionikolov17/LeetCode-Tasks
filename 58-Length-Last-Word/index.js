/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let characters = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];

        if (char !== " ") {
            characters++;

            if (s[i - 1] === " ") {
                return characters;
            }
        }
    }

    return characters;
};

lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");