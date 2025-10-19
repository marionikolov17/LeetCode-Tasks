/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minPrice = prices[0];
    let maxPrice = null;
    let shouldSell = false;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        if (!shouldSell) {
            if (currentPrice < minPrice) {
                minPrice = currentPrice;
                maxPrice = currentPrice;
            } else {
                shouldSell = true;
                maxPrice = currentPrice;
            }
        } else {
            if (currentPrice > maxPrice) {
                maxPrice = currentPrice;
            } else {
                shouldSell = false;
                profit += maxPrice - minPrice;
                minPrice = currentPrice;
                maxPrice = currentPrice;
            }
        }

        if (i === prices.length - 1) {
            profit += maxPrice - minPrice;
        }
    }

    return profit >= 0 ? profit : 0;
};

//maxProfit([7, 1, 5, 3, 6, 4]);
//maxProfit([1, 2, 3, 4, 5]);
//maxProfit([7, 3, 2, 5, 1, 6, 4]);
//maxProfit([2, 1, 2, 0, 1]);
maxProfit([1, 7, 4, 2]);