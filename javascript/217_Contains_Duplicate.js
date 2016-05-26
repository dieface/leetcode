// https://leetcode.com/problems/contains-duplicate/
/*
217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var kv = {};

  for(var i = 0; i < nums.length; i++) {
    var n = nums[i];

    if(!kv[n]) {
      kv[n] = 1;
    } else {
      return true;
    }
  }

  return false;
};

var input = [1, 2];
var output = containsDuplicate(input);

console.log('input: ', input);
console.log('output: ', output);
