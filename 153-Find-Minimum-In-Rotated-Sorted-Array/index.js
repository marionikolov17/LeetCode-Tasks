/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let min = Infinity;

    while (start <= end) {
        min = Math.min(min, nums[start], nums[end]);
        start++;
        end--;
    }

    return min;
};