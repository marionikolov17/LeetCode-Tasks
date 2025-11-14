/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        const row = Array(n).fill(0);
        matrix.push(row);
    }

    for (const query of queries) {
        const [row1, col1, row2, col2] = query;

        for (let x = row1; x <= row2; x++) {
            for (let y = col1; y <= col2; y++) {
                matrix[x][y] += 1;
            }
        }
    }

    return matrix;
};

console.log(rangeAddQueries(3, [
    [1, 1, 2, 2],
    [0, 0, 1, 1]
]));
console.log(rangeAddQueries(2, [
    [0, 0, 1, 1]
]));