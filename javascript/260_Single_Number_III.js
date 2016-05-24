// https://leetcode.com/problems/single-number-iii/

/*
260. Single Number III

Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

For example:

Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

Note:
The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var bucket = {};

  function sumup(n) {
    if(bucket[n]) {
      bucket[n]++;
    } else {
      bucket[n] = 1;
    }
  }

  function onlyOnce(n) {
    return bucket[n] === 1;
  }

  function numeralize(n) {
    return parseInt(n);
  }

  nums.forEach(sumup);

  return Object.keys(bucket).filter(onlyOnce).map(numeralize);
};

var input = [1, 2, 3, 2, 3];
var output = singleNumber(input);

console.log('input: ', input);
console.log('output: ', output);

