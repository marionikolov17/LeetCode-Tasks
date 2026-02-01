/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    let cost = nums[0];

    let newNums = nums.slice(1).sort((a, b) => a - b);
    cost += newNums[0] + newNums[1];
    return cost;
};