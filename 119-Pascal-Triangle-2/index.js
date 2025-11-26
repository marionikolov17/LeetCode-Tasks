/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let dp = [1];

    if (rowIndex === 0) return dp;

    dp = [1, 1];

    for (let i = 2; i <= rowIndex; i++) {
        const newDp = [dp[0]];
        for (let j = 0; j < dp.length; j++) {
            if (j + 1 === dp.length) {
                newDp.push(dp[j]);
                break;
            };

            newDp.push(dp[j] + dp[j + 1]);
        }
        dp = newDp;
    }

    return dp;
};