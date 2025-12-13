/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 1 + i; j < n; j++) {
            let temp = matrix[j][i];
            let swap = matrix[i][j];

            matrix[j][i] = swap;
            matrix[i][j] = temp;
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i] = matrix[i].reverse();
    }
};