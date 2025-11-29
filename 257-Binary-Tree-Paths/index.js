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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    let path = [];

    dfs(root, paths, path);

    return paths;
};

var dfs = function(root, paths, path) {
    if (!root) {
        return;
    };

    path.push(root.val);
    dfs(root.left, paths, path);
    dfs(root.right, paths, path);

    if (root.left === null && root.right === null) {
        paths.push(path.join("->"));
    }
    path.pop();
}