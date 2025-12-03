/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    const current = [];

    backtrack(candidates.sort((a, b) => a - b), target, 0, 0, current, res);

    return res;
};

var backtrack = function(candidates, target, start, sum, current, result) {
    if (sum >= target) {
        if (sum === target) {
            result.push(current.slice());
        }
        return;
    }

    let prev = -1;
    for (let i = start; i < candidates.length; i++) {
        if (candidates[i] === prev) continue;
        current.push(candidates[i]);
        backtrack(candidates, target, i + 1, sum + candidates[i], current, result);
        current.pop();
        prev = candidates[i];
    }
}