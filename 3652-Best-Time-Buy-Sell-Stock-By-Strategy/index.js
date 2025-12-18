/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function(prices, strategy, k) {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        profit += prices[i] * strategy[i];
    }

    let maxProfit = -Infinity;

    let diff = 0;
    for (let i = 0; i < k; i++) {
        if (i < k / 2) {
            diff += prices[i] * 0 - prices[i] * strategy[i];
        } else {
            diff += prices[i] - prices[i] * strategy[i];
        }
    }

    maxProfit = Math.max(maxProfit, profit + diff);

    for (let i = k; i < prices.length; i++) {
        diff -= prices[i - k] * 0 - prices[i - k] * strategy[i - k];
        diff -= prices[i - k + k / 2] * 1 - prices[i - k + k / 2] * strategy[i - k + k / 2];
        diff += prices[i - k + k / 2] * 0 - prices[i - k + k / 2] * strategy[i - k + k / 2];
        diff += prices[i] - prices[i] * strategy[i];
        maxProfit = Math.max(maxProfit, profit + diff);
    }

    return Math.max(maxProfit, profit);
};