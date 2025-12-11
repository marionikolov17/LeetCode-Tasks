/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);
    let result = 1;
    let max = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;

        if (Math.abs(nums[i] - nums[i - 1]) > 1) {
            max = Math.max(max, result);
            result = 1;
        } else {
            result++;
        }
    }

    max = Math.max(max, result);

    return max;
};