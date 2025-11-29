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
    const tree = [];

    bfs(root, 0, tree);

    for (let i = 0; i < tree.length; i++) {
        const level = tree[i];

        let left = 0;
        let right = level.length - 1;

        while (left <= right) {
            if (level[left] !== level[right]) return false;
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