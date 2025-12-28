/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        let index = 0;

        while (grid[index][i] >= 0) {
            index++;
            if (index >= m) break;
        }

        result += m - index;
    }

    return result;
};