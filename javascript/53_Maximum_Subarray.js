// https://leetcode.com/problems/maximum-subarray/

/*
53. Maximum Subarray

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
the contiguous subarray [4,−1,2,1] has the largest sum = 6.

click to show more practice.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(!nums || nums.length === 0) return 0;

  // +/- 9007199254740991
  // from http://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

  // JavaScript only supports 53 bit integers
  // from http://www.2ality.com/2012/07/large-integers.html

  // JavaScript can't handle 64-bit integers, have to use library like BigNumber
  // from http://stackoverflow.com/questions/9643626/javascript-cant-handle-64-bit-integers-can-it

  var max = -9007199254740991;// Number.MAX_SAFE_INTEGER
  var sum = 0;

  for(var i = 0; i < nums.length; i++) {
    console.log('nums[i]: ', nums[i]);

    sum += nums[i];
    console.log('sum: ', sum);

    max = Math.max(max, sum);
    console.log('max: ', max);

    sum = Math.max(sum, 0);
    console.log('sum2: ', sum);
  }

  return max;
};

var input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var output = maxSubArray(input);

console.log('input: ', input);
console.log('output: ', output);
