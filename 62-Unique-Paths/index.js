/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = [];

    for (let i = 0; i < m; i++) {
        dp.push([]);

        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 1;
            } else if (i === 0 && j > 0) {
                dp[i][j] = 1;
            } else if (i > 0 && j === 0) {
                dp[i][j] = 1;
            } else if (i > 0 && j > 0) {
                const top = dp[i - 1][j];
                const left = dp[i][j - 1];
                dp[i][j] = top + left;
            }
        }
    }

    return dp[m - 1][n - 1];
};