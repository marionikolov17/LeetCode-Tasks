/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Validate verticals and horizontals
    for (let i = 0; i < board.length; i++) {
        const verticalMap = new Map();
        const horizontalMap = new Map();

        for (let j = 0; j < board.length; j++) {
            const verticalNum = board[j][i];
            const horizontalNum = board[i][j];

            if (verticalMap.has(verticalNum) || horizontalMap.has(horizontalNum)) return false;

            if (verticalNum !== '.') verticalMap.set(verticalNum, true);
            if (horizontalNum !== '.') horizontalMap.set(horizontalNum, true);
        }
    }

    const subBoxesSize = Math.sqrt(board.length);

    // Validate sub boxes
    for (let i = 0; i < subBoxesSize; i++) {
        let verticalStart = i * subBoxesSize;

        for (let j = 0; j < subBoxesSize; j++) {
            let horizontalStart = j * subBoxesSize;

            const map = new Map();
            for (let k = verticalStart; k < verticalStart + subBoxesSize; k++) {

                for (let o = horizontalStart; o < horizontalStart + subBoxesSize; o++) {
                    const num = board[k][o];

                    if (map.has(num)) return false;

                    if (num !== '.') map.set(num, true);
                }
            }
        }
    }

    return true;
};

console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
console.log(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
console.log(isValidSudoku([
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]
]));