/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let n = obstacleGrid.length;
    let m = obstacleGrid[0].length;
    const dp = [];

    for (let i = 0; i < n; i++) {
        dp.push([]);
        for (let j = 0; j < m; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                if (i === 0) {
                    dp[i][j] = j === 0 ? 1 : dp[i][j - 1];
                } else if (j === 0) {
                    dp[i][j] = i === 0 ? 1 : dp[i - 1][j];
                } else if (i > 0 && j > 0) {
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
            }
        }
    }

    return dp[n - 1][m - 1];
};