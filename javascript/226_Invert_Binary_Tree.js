// https://leetcode.com/problems/invert-binary-tree/

/*
226. Invert Binary Tree

Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root) {} else { return root; }
    if(root.left) {
    } else {
        if(root.right) {} else {
            return root;
        }
    }

  var left = root.left;
  var right = root.right;

  root.right = invertTree(left);
  root.left = invertTree(right);

  return root;
};
