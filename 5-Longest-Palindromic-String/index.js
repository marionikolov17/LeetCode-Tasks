/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxSequence = "";

    for (let i = 0; i < s.length; i++) {
        let sequence = s[i];
        let backSequence = s[i];

        for (let j = i + 1; j < s.length; j++) {
            sequence += s[j];
            backSequence = s[j] + backSequence;

            if (sequence === backSequence && sequence.length > maxSequence.length) {
                maxSequence = sequence;
            }
        }

        if (sequence === backSequence && sequence.length > maxSequence.length) {
            maxSequence = sequence;
        }
    }

    return maxSequence;
};