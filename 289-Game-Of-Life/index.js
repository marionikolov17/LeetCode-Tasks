/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const boardCopy = board.slice().map((el) => el.slice());
    for (let n = 0; n < board.length; n++) {
        for (let m = 0; m < board[n].length; m++) {
            const cell = board[n][m];

            const liveNeighbors = countLiveNeighbors(n, m, boardCopy);

            if (cell === 1) {
                if (liveNeighbors < 2) {
                    board[n][m] = 0;
                } else if (liveNeighbors === 2 || liveNeighbors === 3) {
                    board[n][m] = 1;
                } else {
                    board[n][m] = 0;
                }
            } else {
                if (liveNeighbors === 3) board[n][m] = 1;
            }
        }
    }
};

var countLiveNeighbors = function(n, m, board) {
    let count = 0;

    for (let i = n - 1; i <= n + 1; i++) {
        if (i < 0 || i >= board.length) continue;

        for (let j = m - 1; j <= m + 1; j++) {
            if (j < 0 || j >= board[n].length || (j === m && i === n)) continue;

            count += board[i][j]
        }
    }

    return count;
}