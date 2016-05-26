// https://leetcode.com/problems/intersection-of-two-arrays-ii/

/*
350. Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to num2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var kv1 = {};
  var kv2 = {};
  var kv = {};
  var result = [];

  nums1.forEach(function(n) {
    if(!kv1[n]) {
      kv1[n] = 1;
    } else {
      kv1[n]++;
    }
  });

  nums2.forEach(function(n) {
    if(!kv2[n]) {
      kv2[n] = 1;
    } else {
      kv2[n]++;
    }
  });

  Object.keys(kv1).forEach(function(key) {
    if(kv2[key]) {
      kv[key] = kv1[key] > kv2[key] ? kv2[key] : kv1[key];
    }
  });

  Object.keys(kv).forEach(function(key) {
    var count = kv[key];

    for(count; count > 0; count--) {
      result.push(parseInt(key));
    }
  });

  return result;
};

var input1 = [1, 2, 2, 1];
var input2 = [2, 2];
var output = intersect(input1, input2);

console.log('input1: ', input1);
console.log('input2: ', input2);
console.log('output: ', output);
