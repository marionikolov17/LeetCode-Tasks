/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    let current = [];

    backtrack(candidates, target, 0, 0, current, res);

    return res;
};

var backtrack = function(candidates, target, start, sum, current, res) {
    if (sum >= target) {
        if (sum === target) {
            res.push(current.slice());
        }
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        current.push(candidates[i]);
        backtrack(candidates, target, i, sum + candidates[i], current, res);
        current.pop();
    }
}