/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const tree1 = [];
    const tree2 = [];

    traverseTree(p, 0, tree1);
    traverseTree(q, 0, tree2);

    if (tree1.length !== tree2.length) return false;

    for (let i = 0; i < tree1.length; i++) {
        if (tree1[i].length !== tree2[i].length) return false;

        for (let j = 0; j < tree1[i].length; j++) {
            if (tree1[i][j] !== tree2[i][j]) return false;
        }
    }

    return true;
};

var traverseTree = function(root, level, res) {
    if (root === null) {
        if (res[level]) {
            res[level].push(null)
        }
        return;
    }

    if (res.length <= level) {
        res.push([]);
    }

    res[level].push(root.val);

    traverseTree(root.left, level + 1, res);
    traverseTree(root.right, level + 1, res);
}