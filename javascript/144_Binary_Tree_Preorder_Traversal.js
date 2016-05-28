// https://leetcode.com/problems/binary-tree-preorder-traversal/

/*
144. Binary Tree Preorder Traversal

Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if(root) {} else { return root; }

  var vals = [];

  function traverse(r) {
    if(r.val) vals.push(r.val);

    if(r.left) traverse(r.left);
    if(r.right) traverse(r.right);
  }

  traverse(root);
  return vals;
};
