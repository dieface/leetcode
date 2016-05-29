// https://leetcode.com/problems/single-number-ii/

/*
137. Single Number II

Given an array of integers, every element appears three times except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var checklist = {};

  for(var i = 0; i < nums.length; i++) {
    var n = nums[i];
    check(n, checklist);
  }

  return parseInt(Object.keys(checklist).filter(function(key) {
    var times = checklist[key];

    if(times < 3) return true;
  })[0]);

  function check(n, list) {
    if(list[n]) {
      list[n]++;
    } else {
      list[n] = 1;
    }
  }
};
