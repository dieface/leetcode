// https://leetcode.com/problems/intersection-of-two-arrays/

/*
349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if(nums1.length === 0 || nums2.length === 0 ) return [];

  var bucket = {};
  var ans = {};

  function mark(n) {
    if(!bucket[n]) bucket[n] = true;
  }

  function exist(n) {
    return bucket[n];
  }

  function sanitize(s) {
    return parseInt(s);
  }

  nums1.forEach(mark);

  nums2.forEach(function(n) {
    if(exist(n)) ans[n] = true;
  });

  return Object.keys(ans).map(sanitize);
};

var input1 = [1];
var input2 = [1, 1];
var output = intersection(input1, input2);

console.log('input1: ', input1);
console.log('input2: ', input2);
console.log('output: ', output);


