// https://leetcode.com/problems/power-of-three/

/*
326. Power of Three

Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  // eception: 243, get Math.log(243) / Math.log(3) = 4.9999999
  //return n > 0 && Math.pow(3, Math.log(n) / Math.log(3)) === n
  return n > 0 && Math.pow(3, Math.round(Math.log(n) / Math.log(3))) === n
};
