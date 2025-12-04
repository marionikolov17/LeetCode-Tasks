/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0;
    let column = 0;
    let topBoundary = 0;
    let bottomBoundary = n;
    let leftBoundary = 0;
    let rightBoundary = m;

    if (n === 1) return matrix[0];

    if (m === 1) {
        for (let i = 0; i < n; i++) {
            result.push(matrix[i][0]);
        }
        return result;
    }

    while (topBoundary <= bottomBoundary && leftBoundary <= rightBoundary) {
        if (result.length >= m * n) break;

        for (let i = leftBoundary; i < rightBoundary; i++) {
            result.push(matrix[row][i]);
        }
        topBoundary++;
        column = rightBoundary - 1;

        for (let i = topBoundary; i < bottomBoundary; i++) {
            result.push(matrix[i][column]);
        }
        rightBoundary--;
        row = bottomBoundary - 1;

        if (row < topBoundary) break;

        for (let i = rightBoundary - 1; i >= leftBoundary; i--) {
            result.push(matrix[row][i]);
        }
        bottomBoundary--;

        column = leftBoundary;

        if (column > rightBoundary) break;
        if (result.length >= m * n) break;

        for (let i = bottomBoundary - 1; i >= topBoundary; i--) {
            result.push(matrix[i][column]);
        }
        leftBoundary++;

        row = topBoundary;
    }

    return result;
};

//spiralOrder([
//    [1, 2, 3, 4],
//    [5, 6, 7, 8],
//    [9, 10, 11, 12]
//]);
//spiralOrder([
//    [7],
//    [9],
//    [6]
//]);
//spiralOrder([
//    [1, 2],
//    [3, 4]
//]);
//spiralOrder([
//    [2, 5, 8],
//    [4, 0, -1]
//]);
//spiralOrder([
//    [2, 3, 4],
//    [5, 6, 7],
//    [8, 9, 10],
//    [11, 12, 13],
//    [14, 15, 16]
//]);