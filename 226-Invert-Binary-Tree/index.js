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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    invert(root);
    return root;
};

var invert = function(node) {
    if (!node) return;

    const leftNode = node.left;
    const rightNode = node.right;

    node.left = rightNode;
    node.right = leftNode;

    invert(node.left);
    invert(node.right);
}