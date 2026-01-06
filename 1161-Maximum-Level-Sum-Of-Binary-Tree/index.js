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
var maxLevelSum = function(root) {
    const res = [];
    bfs(root, 0, res);

    let maxIndex = -1;
    let max = -Infinity;

    for (let i = 0; i < res.length; i++) {
        let num = res[i];

        if (num > max) {
            max = num;
            maxIndex = i;
        }
    }

    return maxIndex + 1;
};

var bfs = function(root, level, res) {
    if (!root) return;

    if (level >= res.length) res.push(0);

    res[level] += root.val;
    bfs(root.left, level + 1, res);
    bfs(root.right, level + 1, res);
}