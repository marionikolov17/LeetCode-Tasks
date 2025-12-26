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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const res = [];
    bfs(root, 0, res);

    let result = [];

    for (const level of res) {
        result.push(...level);
    }

    return result;
};

var bfs = function(root, level, res) {
    if (!root) return;

    if (level >= res.length) res.push([]);

    if (res[level].length === 0) res[level].push(root.val);
    bfs(root.right, level + 1, res);
    bfs(root.left, level + 1, res);
}