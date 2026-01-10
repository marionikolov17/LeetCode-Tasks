/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = Array(text1.length).fill(0);
    let longest = 0;

    for (const char of text2) {
        let currentLength = 0;

        for (let i = 0; i < dp.length; i++) {
            if (currentLength < dp[i]) {
                currentLength = dp[i];
            } else if (char === text1[i]) {
                dp[i] = currentLength + 1;
                longest = Math.max(longest, currentLength + 1);
            }
        }
    }

    return longest;
};