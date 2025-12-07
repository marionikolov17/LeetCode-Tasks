/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    return Math.max(solve(nums.slice(0, nums.length - 1)), solve(nums.slice(1, nums.length)));
};

var solve = function(nums) {
    console.log(nums)
    let max = 0;

    const dp = [];

    for (let i = 0; i < nums.length; i++) {
        let maxAmount = 0;

        for (let j = i - 2; j >= 0; j--) {
            maxAmount = Math.max(maxAmount, dp[j]);
        }

        const amount = maxAmount + nums[i];
        max = Math.max(max, amount);
        dp[i] = amount;
    }

    return max;
}

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3]));
console.log(rob([4, 1, 2, 7, 5, 3, 1]));
console.log(rob([200, 3, 140, 20, 10]));
console.log(rob([1, 3, 1, 3, 100]));
console.log(rob([1, 2]));