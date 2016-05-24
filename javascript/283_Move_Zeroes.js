// https://leetcode.com/problems/move-zeroes/

/*
283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var len = nums.length;
  var count = 0;
  var index = 0;

  while(count < len) {
    count++;

    if(nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
    } else {
      index++;
    }
  }

  console.log('output: ', nums);
};


var input = [0, 1, 0, 3, 12];
console.log('input: ', input);

moveZeroes(input);
