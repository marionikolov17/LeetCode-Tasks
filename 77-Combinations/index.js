/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const current = [];

    backtrack(n, k, 1, current, res);

    return res;
};

var backtrack = function(n, k, start, current, res) {
    if (current.length === k) {
        res.push(current.slice());
        return;
    }

    for (let i = start; i <= n; i++) {
        current.push(i);
        backtrack(n, k, i + 1, current, res);
        current.pop();
    }
}