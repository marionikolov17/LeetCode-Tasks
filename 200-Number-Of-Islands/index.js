/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const seen = [];
    let islands = 0;

    for (let i = 0; i < grid.length; i++) {
        if (i >= seen.length) seen.push([]);
        for (let j = 0; j < grid[i].length; j++) {
            if (seen[i][j] || grid[i][j] === '0') continue;
            islands++;
            dfs(grid, i, j, seen);
        }
    }

    return islands;
};

var dfs = function(grid, i, j, seen) {
    if (i >= seen.length) seen.push([]);
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0' || seen[i][j]) return;

    seen[i][j] = true;

    dfs(grid, i, j + 1, seen);
    dfs(grid, i + 1, j, seen);
    dfs(grid, i, j - 1, seen);
    dfs(grid, i - 1, j, seen);
}