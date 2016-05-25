// https://leetcode.com/problems/product-of-array-except-self/

/*
238. Product of Array Except Self

Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var result = [];

  nums.forEach(function(n) {
    result.push(1);
  });

  var left = 1;
  for(var i = 0; i < nums.length - 1; i++) {
    left *= nums[i];
    result[i + 1] = left;
  }

  var right = 1;
  for(var i = nums.length - 1; i > 0; i--) {
    right *= nums[i];
    result[i-1] *= right;
  }

  return result;
};

var input = [1,2,3,4];
var output = productExceptSelf(input);

console.log('input: ', input);
console.log('output: ', output);
