/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let output = 0;

    let stack = [1, 2];

    for (let i = 3; i <= n; i++) {
        const sum = stack.reduce((acc, value) => acc + value, 0);
        const latestNum = stack.pop();
        output = sum;
        stack = [latestNum, sum];
    }

    return output;
};