// https://leetcode.com/problems/unique-binary-search-trees/

/*
96. Unique Binary Search Trees

Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var count = new Array(n+2);
  count[0] = 1;
  count[1] = 1;

  for(var i = 2; i <= n; i++) {
    for(var j = 0; j < i; j++) {
      if(count[i]) {} else { count[i] = 0; }
      count[i] += count[j] * count[i - j - 1];
    }
  }

  return count[n];
};
