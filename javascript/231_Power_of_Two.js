// https://leetcode.com/problems/power-of-two/

/*
231. Power of Two

Given an integer, write a function to determine if it is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n !== 0 && Math.pow(2, Math.round(Math.log(n) / Math.log(2))) === n
};
