/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const dp = Array.from({ length: m + 1 }, () => new Uint8Array(n + 1));

    for (let i = 0; i < strs.length; i++) {
        let [ones, zeros] = countOnesAndZeros(strs[i]);

        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
            }
        }
    }

    return dp[m][n];
};

var countOnesAndZeros = function(string) {
    let ones = 0;
    let zeros = 0;

    for (const char of string) {
        if (char === '1') {
            ones++;
        } else {
            zeros++;
        }
    }

    return [ones, zeros];
}

findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3);