/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    backtrack("", 0, 0, n, res);

    return res;
};

var backtrack = function(string, open, close, n, result) {
    if (open === n && close === n) {
        result.push(string);
        return;
    }

    if (open < n) {
        backtrack(string + "(", open + 1, close, n, result);
    }

    if (open > close) {
        backtrack(string + ")", open, close + 1, n, result);
    }
}