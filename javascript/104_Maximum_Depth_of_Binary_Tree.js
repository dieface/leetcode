// https://leetcode.com/problems/maximum-depth-of-binary-tree

/*
104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
 * @return {number}
 */
var maxDepth = function(root) {
  if(root) {} else  {
    return 0;
  }

  var left = maxDepth(root.left);
  var right = maxDepth(root.right);

  return Math.max(left, right) + 1;
};
