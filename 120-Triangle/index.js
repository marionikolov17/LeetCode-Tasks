/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = [
        [triangle[0][0]]
    ];

    for (let i = 1; i < triangle.length; i++) {
        dp.push(Array(triangle[i].length).fill(0));

        dp[i][0] = dp[i - 1][0] + triangle[i][0];

        for (let j = 1; j < triangle[i].length; j++) {
            if (j === triangle[i].length - 1) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1] + triangle[i][j], dp[i - 1][j] + triangle[i][j]);
            }
        }
    }

    return Math.min(...dp[triangle.length - 1]);
};