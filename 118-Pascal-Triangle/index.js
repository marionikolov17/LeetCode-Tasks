/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const dp = [
        [1]
    ];

    if (numRows === 1) return dp;

    dp[1] = [1, 1];

    for (let i = 2; i < numRows; i++) {
        const result = [dp[i - 1][0]]

        for (let j = 0; j < dp[i - 1].length; j++) {
            if (j + 1 === dp[i - 1].length) {
                result.push(dp[i - 1][j]);
            } else {
                result.push(dp[i - 1][j] + dp[i - 1][j + 1]);
            }
        }

        dp[i] = result;
    }

    return dp;
};