// https://leetcode.com/problems/binary-tree-inorder-traversal/

/*
94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?

confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
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
var inorderTraversal = function(root) {
  var tmp = root;
  var stack = [];
  var res = [];

  while(tmp || stack.length !== 0) {
    while(tmp) {
      stack.push(tmp);
      tmp = tmp.left;
    }

    tmp = stack.pop();
    res.push(tmp.val);
    tmp = tmp.right;
  }

  return res;
};
