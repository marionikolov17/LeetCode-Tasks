/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];

    let maxEnding = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEnding = Math.max(maxEnding + nums[i], nums[i]);

        currentSum = Math.max(currentSum, maxEnding);
    }

    return currentSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);