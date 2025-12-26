/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    const dp = [];
    let penalty = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === "Y") {
            dp[i] = 1;
            penalty++;
        } else {
            dp[i] = 0;
        }
    }

    let minPenalty = penalty;
    let minPenaltyIndex = 0;

    for (let i = 1; i <= customers.length; i++) {
        if (dp[i - 1] === 1) {
            dp[i - 1] = 0;
            penalty--;
        } else {
            dp[i - 1] = 1;
            penalty++;
        }

        if (penalty < minPenalty) {
            minPenaltyIndex = i;
            minPenalty = penalty;
        }
    }

    return minPenaltyIndex;
};