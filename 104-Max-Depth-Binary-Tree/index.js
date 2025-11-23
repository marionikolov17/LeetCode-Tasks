/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const levels = [];

    bfs(root, 0, levels);

    return levels.length;
};

var bfs = function(node, level, levels) {
    if (node === null) return;

    if (levels.length <= level) {
        levels.push([]);
    }

    bfs(node.left, level + 1, levels);
    bfs(node.right, level + 1, levels)
}

// Depth first search

var maxDepth = function(root) {
    return dfs(root, 0);
};

var dfs = function(node, count) {
    if (node === null) return count;
    const l = dfs(node.left, count + 1);
    const r = dfs(node.right, count + 1);
    return Math.max(l, r);
}