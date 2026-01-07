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
var maxProduct = function(root) {
    var dfs = function(node) {
        if (!node) return 0;
        node.val += dfs(node.left) + dfs(node.right);
        return node.val;
    }

    const total = dfs(root);

    let max = 0;
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (!node) continue;

        max = Math.max(max, (total - node.val) * node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return max % (Math.pow(10, 9) + 7);
};