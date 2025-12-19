/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const dp = [0, 0, 0];

    for (const color of nums) {
        dp[color]++;
    }

    let index = 0;
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        while (dp[index] <= 0) {
            index++;
            start++;
        };

        nums[i] = start;
        dp[index]--;
    }
};