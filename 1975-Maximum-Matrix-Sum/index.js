/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    const n = matrix.length;
    let negativeNumbersCount = 0;
    let minNum = Infinity;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let num = matrix[i][j];

            if (num < 0) negativeNumbersCount++;
            minNum = Math.min(minNum, Math.abs(num));
            sum += Math.abs(num);
        }
    }

    if (negativeNumbersCount % 2 !== 0) {
        sum -= minNum;
        sum -= minNum;
    }

    return sum;
};