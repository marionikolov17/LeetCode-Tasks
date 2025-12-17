/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = Infinity;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === Infinity) {
                matrix[i][j] = 0;

                for (let row = 0; row < matrix[i].length; row++) {
                    if (matrix[i][row] !== Infinity) {
                        matrix[i][row] = 0;
                    }
                }

                for (let col = 0; col < matrix.length; col++) {
                    if (matrix[col][j] !== Infinity) {
                        matrix[col][j] = 0;
                    }
                }
            }
        }
    }
};