/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];

    let max = prevMax;

    for (let i = 1; i < nums.length; i++) {
        const newMax = Math.max(nums[i] * prevMax, nums[i] * prevMin, nums[i]);
        const newMin = Math.min(nums[i] * prevMax, nums[i] * prevMin, nums[i]);

        max = Math.max(max, newMax);

        prevMax = newMax;
        prevMin = newMin;
    }

    return max;
};