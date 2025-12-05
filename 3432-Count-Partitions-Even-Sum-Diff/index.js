/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let result = 0;
    let leftSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const right = nums.slice(i).reduce((acc, value) => acc + value, 0);

        if (Math.abs(leftSum - right) % 2 === 0) result++;
        leftSum += nums[i];
    }

    return result;
};