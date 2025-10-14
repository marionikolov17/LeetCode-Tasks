/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const firstWord = strs[0];

    if (strs.length === 1) return firstWord;

    let prefixLength = firstWord.length;

    let matches = 1;

    for (let i = prefixLength; i > 0; i--) {
        const prefix = firstWord.slice(0, i);
        matches = 1;

        for (let j = 1; j < strs.length; j++) {
            const word = strs[j];

            if (word.startsWith(prefix)) {
                matches++;
            }

            if (matches === strs.length) return prefix;
        }
    }

    return "";
}

//console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//console.log(longestCommonPrefix(["a"]));
//longestCommonPrefix(["ab", "a"]);
//longestCommonPrefix(["flower", "flower", "flower", "flower"])
//longestCommonPrefix(["flower", "fkow"])