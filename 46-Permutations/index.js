/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];

    backtrack(nums, [], [], res);
    return res;
};

var backtrack = function(nums, path, used, res) {
    if (path.length === nums.length) {
        res.push([...path]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        path.push(nums[i]);
        backtrack(nums, path, used, res);
        path.pop();
        used[i] = false;
    }
}

permute([1, 2, 3]);