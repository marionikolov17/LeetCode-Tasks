/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    const map = new Map();
    let lastPair;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let prevLeft = map.get(`${i}${j - 1}`);
            let prevTop = map.get(`${i - 1}${j}`);
            let products;

            if (prevLeft === undefined && prevTop === undefined) {
                products = [grid[i][j]];
            } else if (prevLeft === undefined && prevTop !== undefined) {
                products = [grid[i][j] * prevTop];
            } else if (prevLeft !== undefined && prevTop === undefined) {
                products = [grid[i][j] * prevLeft];
            } else {
                let min = Infinity;
                let max = -Infinity;

                for (const p of prevLeft) {
                    max = Math.max(max, p * grid[i][j]);
                    min = Math.min(min, p * grid[i][j]);
                }

                for (const p of prevTop) {
                    max = Math.max(max, p * grid[i][j]);
                    min = Math.min(min, p * grid[i][j]);
                }

                products = [max, min];
            }

            map.set(`${i}${j}`, products);
            lastPair = products;
        }
    }

    const product = Math.max(...lastPair);
    if (product < 0) return -1;
    return product % (Math.pow(10, 9) + 7);
};

console.log(maxProductPath([
    [-1, -2, -3],
    [-2, -3, -3],
    [-3, -3, -2]
]));