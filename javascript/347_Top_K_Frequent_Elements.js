// https://leetcode.com/problems/top-k-frequent-elements/

/*
347. Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var times = {};

  nums.forEach(function(n) {
    if(!times[n]) {
      times[n] = 1;
    } else {
      times[n]++;
    }
  });
};
