/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = []

    for (let i = cost.length - 1; i >= 0; i--) {
        const first = dp[i + 2] || 0;
        const second = dp[i + 1] || 0;

        dp[i] = cost[i] + Math.min(first, second);
    }

    return Math.min(dp[0], dp[1]);
};