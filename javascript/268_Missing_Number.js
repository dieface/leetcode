// https://leetcode.com/problems/missing-number/

/*
268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var checklist = {};
  var max = 0;

  for(var i = 0; i < nums.length; i++) {
    if(nums[i] > max) {
      max = nums[i];
    }

    checklist[nums[i]] = true;
  }

  for(var i = 0; i < max + 1; i++) {
    if(checklist[i]) {
    } else {
      return i;
    }
  }

  return max + 1;
};

var input = [0, 1, 3];
var output = missingNumber(input);

console.log('input: ', input);
console.log('output: ', output);
