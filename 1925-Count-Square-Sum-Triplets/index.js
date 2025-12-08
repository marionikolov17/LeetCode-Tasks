/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let result = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            const square = Math.sqrt(a * a + b * b);
            if (square <= n && Number.isInteger(square)) result++;
        }
    }
    return result;
};