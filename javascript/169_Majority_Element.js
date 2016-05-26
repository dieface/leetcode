// https://leetcode.com/problems/majority-element/

/*
169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var condition = nums.length / 2;

  var kv = {};
  var major;

  for(var i = 0; i < nums.length; i++) {
      var n = nums[i];

      if(kv[n]) {
          kv[n]++;
      } else {
          kv[n] = 1;
      }

      if(kv[n] >= condition) {
        major = n;
        break;
      }
  }

  return major;
}

// var input = [1, 2, 2, 3, 4, 2, 3];
var input = [6,5,5];
var output = majorityElement(input);

console.log('input: ', input);
console.log('output: ', output);
