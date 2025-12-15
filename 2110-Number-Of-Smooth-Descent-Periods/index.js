/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let result = 1;
    let currentPeriod = [prices[0]];

    for (let i = 1; i < prices.length; i++) {
        if (currentPeriod[currentPeriod.length - 1] - prices[i] !== 1) {
            currentPeriod = [prices[i]];
            result++;
        } else {
            currentPeriod.push(prices[i]);
            result += currentPeriod.length;
        }
    }

    return result;
};