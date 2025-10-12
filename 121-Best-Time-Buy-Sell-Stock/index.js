/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let sellPrice = 0;
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        console.log(buyPrice, sellPrice)
        if (prices[i] < buyPrice && i !== prices.length - 1) {
            buyPrice = prices[i];
            sellPrice = buyPrice;
        } else if (prices[i] > sellPrice) {
            sellPrice = prices[i];
        }

        let currProfit = sellPrice - buyPrice;
        if (currProfit > maxProfit) maxProfit = currProfit;
    }

    return maxProfit >= 0 ? maxProfit : 0;
};

//maxProfit([7, 1, 5, 3, 6, 4]);
//maxProfit([2, 4, 1]);
//maxProfit([2, 1, 2, 1, 0, 1, 2]);
//maxProfit([5, 6, 1, 4])