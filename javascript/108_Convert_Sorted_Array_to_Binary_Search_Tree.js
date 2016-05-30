// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/*
108. Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function buildTree(nArr, start, end) {
    if(start > end) {
      return null;
    }

    var node = new TreeNode(nArr[Math.floor((start + end) / 2)]);
    node.left = buildTree(nArr, start, Math.floor((start + end) / 2) - 1);
    node.right = buildTree(nArr, Math.floor((start + end) / 2) + 1, end);
    return node;
  }

  if(!nums) return null;
  return buildTree(nums, 0, nums.length - 1);
};
