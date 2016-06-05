// https://leetcode.com/problems/climbing-stairs/

/*
70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  /*
    0 => 0
    1 => 1
    2 => 2
    3 => 3
    4 => 5
    5 => 8
  */

  if(n <= 3) return n;

  var prev = 2;
  var ans = 3;
  var tmp;

  for(var i = 4; i <= n; i++) {
    tmp = ans;
    ans += prev;
    prev = tmp;
  }

  return ans;
};
