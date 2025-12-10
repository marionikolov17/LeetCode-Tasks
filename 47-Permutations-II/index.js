/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    backtrack(nums, [], [], result);
    return result;
};

var backtrack = function(nums, visited, current, result) {
    if (current.length === nums.length) {
        result.push(current.slice());
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (visited[i] === true) continue;
        if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1] === false) continue;
        current.push(nums[i]);
        visited[i] = true;
        backtrack(nums, visited, current, result);
        current.pop();
        visited[i] = false;
    }
}