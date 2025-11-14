/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const pattern = `(${p.replaceAll(".", "[a-z]")}){1}`

    const regex = new RegExp(pattern);

    const match = s.match(regex);

    if (!match) return false;

    return s === match[0];
};

isMatch("aa", "a");