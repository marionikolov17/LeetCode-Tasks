/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [
        []
    ];
    const current = [];

    backtrack(nums, 0, current, result);

    return result;
};

var backtrack = function(nums, index, current, result) {
    if (index >= nums.length) {
        return;
    }

    for (let i = index; i < nums.length; i++) {
        current.push(nums[i]);
        result.push(current.slice());
        backtrack(nums, i + 1, current, result);
        current.pop();
    }
}