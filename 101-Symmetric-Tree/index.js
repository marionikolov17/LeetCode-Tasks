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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;

    const leftRoot = root.left;
    const rightRoot = root.right;

    const leftTree = [];
    const rightTree = [];

    bfs(leftRoot, 0, leftTree);
    bfs(rightRoot, 0, rightTree);

    if (leftTree.length !== rightTree.length) return false;

    for (let i = 0; i < leftTree.length; i++) {
        let left = 0;
        let right = leftTree[i].length - 1;

        while (left < leftTree.length && right >= 0) {
            if (leftTree[i][left] !== rightTree[i][right]) return false;
            left++;
            right--;
        }
    }

    return true;
};

var bfs = function(root, level, res) {
    if (res.length <= level) res.push([]);

    if (root === null) {
        res[level].push(null);
        return;
    }

    res[level].push(root.val);

    bfs(root.left, level + 1, res);
    bfs(root.right, level + 1, res);
}