/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let rowLow = 0;
    let rowHigh = m;

    let rowMid = Math.floor((rowLow + rowHigh) / 2);

    while (rowLow <= rowHigh && rowMid >= 0 && rowMid < m) {
        let colLow = 0;
        let colHigh = n;

        let colMid = Math.floor((colLow + colHigh) / 2);

        while (colLow <= colHigh && colMid >= 0 && colMid < n) {
            const num = matrix[rowMid][colMid];

            if (num === target) return true;

            if (num < target) {
                colLow = colMid + 1;
            } else if (num > target) {
                colHigh = colMid - 1;
            }

            colMid = Math.floor((colLow + colHigh) / 2);
        }

        if (colMid < n) {
            rowHigh = rowMid - 1;
        } else if (colMid >= n) {
            rowLow = rowMid + 1;
        }

        rowMid = Math.floor((rowLow + rowHigh) / 2);
    }

    return false;
};

console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
], 13));
console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
], 3));
console.log(searchMatrix([
    [1, 1]
], 0));
console.log(searchMatrix([
    [1, 3]
], 2));