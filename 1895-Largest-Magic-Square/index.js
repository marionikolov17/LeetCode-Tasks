/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let squareLength = Math.min(m, n); squareLength > 1; squareLength--) {
        let horizontalDiff = n - squareLength;
        let verticalDiff = m - squareLength;

        for (let i = 0; i <= verticalDiff; i++) {
            for (let j = 0; j <= horizontalDiff; j++) {
                let subGrid = grid.slice(i, i + squareLength).map((row) => {
                    return row.slice(j, j + squareLength);
                });

                if (isMagicSquare(subGrid)) return squareLength;
            }
        }
    }

    return 1;
};

var isMagicSquare = function(grid) {
    let compareSum = grid[0].reduce((acc, value) => acc + value, 0);

    for (let i = 1; i < grid.length; i++) {
        let sum = grid[i].reduce((acc, value) => acc + value, 0);

        if (sum !== compareSum) return false;
    }

    for (let i = 0; i < grid.length; i++) {
        let sum = 0;

        for (let j = 0; j < grid.length; j++) {
            sum += grid[j][i];
        }

        if (sum !== compareSum) return false;
    }

    let diagonalSum = 0;
    for (let i = 0; i < grid.length; i++) {
        diagonalSum += grid[i][i];
    }

    if (diagonalSum !== compareSum) return false;

    diagonalSum = 0;
    for (let i = 0; i < grid.length; i++) {
        diagonalSum += grid[i][grid.length - i - 1];
    }

    if (diagonalSum !== compareSum) return false;

    return true;
}