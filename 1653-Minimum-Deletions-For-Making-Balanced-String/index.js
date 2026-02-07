/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const dp = [];
    let bCount = 0;

    for (let i = 0; i < s.length; i++) {
        dp.push([]);
        dp[i][0] = bCount;
        if (s[i] === 'b') bCount++;
    }

    let aCount = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i][1] = aCount;
        if (s[i] === 'a') aCount++;
    }

    let min = Infinity;
    for (let i = 0; i < dp.length; i++) {
        min = Math.min(min, dp[i][0] + dp[i][1]);
    }

    return min;
};