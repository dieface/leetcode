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
  var products = [];

  nums.forEach(function(n, idx) {
    if(!products[idx]) products[idx] = 1

    for(var i = 0; i < nums.length; i++) {
      if(i === idx) continue;

      products[idx] *= nums[i];
    }
  });

  return products;
};

var input = [1,2,3,4];
var output = productExceptSelf(input);

console.log('input: ', input);
console.log('output: ', output);
