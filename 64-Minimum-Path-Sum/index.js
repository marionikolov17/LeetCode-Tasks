/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const dp = [];
    let m;
    let n;

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        m = i;
        dp.push([]);

        for (let j = 0; j < row.length; j++) {
            n = j;
            if (i === 0 && j === 0) {
                dp[i][j] = row[j];
            } else if (i === 0 && j > 0) {
                const left = dp[i][j - 1];
                dp[i][j] = left + row[j];
            } else if (i > 0 && j === 0) {
                const top = dp[i - 1][j];
                dp[i][j] = top + row[j];
            } else if (i > 0 && j > 0) {
                const top = dp[i - 1][j];
                const left = dp[i][j - 1];
                dp[i][j] = Math.min(top + row[j], left + row[j]);
            }
        }
    }

    return dp[m][n];
};