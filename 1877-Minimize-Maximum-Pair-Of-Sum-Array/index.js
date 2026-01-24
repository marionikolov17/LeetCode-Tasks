/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let max = 0;

    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        max = Math.max(max, nums[start] + nums[end]);
        start++;
        end--;
    }

    return max;
};