/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";

    return mapConsecutiveDigits(countAndSay(n - 1));
};

var mapConsecutiveDigits = function(s) {
    let currentChar = s[0];
    let currentCharCount = 1;
    let results = "";

    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            currentCharCount++;
        } else {
            results += `${currentCharCount}${currentChar}`;
            currentChar = s[i];
            currentCharCount = 1;
        }
    }

    results += `${currentCharCount}${currentChar}`;

    return results;
}

console.log(countAndSay(2));