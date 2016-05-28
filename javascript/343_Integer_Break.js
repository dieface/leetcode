// https://leetcode.com/problems/integer-break/

/*
343. Integer Break

Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 + 3 + 4).

Note: you may assume that n is not less than 2.

Hint:

There is a simple O(n) solution to this problem.
You may check the breaking results of n ranging from 7 to 10 to discover the regularities.
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
// 2 -> 1 * 1
// 3 -> 2 * 1
// 4 -> 2 * 2
// 5 -> 3 * 2
// 6 -> 3 * 3
// 7 -> 3 * 2 * 2
// 8 -> 3 * 3 * 2
// 9 -> 3 * 3 * 3
// 10 -> 3 * 3 * 2 * 2
// 11 -> 3 * 3 * 3 * 2
// 12 -> 3 * 3 * 3 * 3
// 13 -> 3 * 3 * 3 * 2 * 2

// n / 3 <= 1 時，分為兩個數的乘積，盡量均攤
// n / 3 > 1 時，分為若干個3和2的乘積
// n % 3 == 0 時，分為商數個3的乘積
// n % 3 == 1 時，分為商數-1個3和兩個2的乘積
// n % 3 == 2 時，分為商數個3和一個2的乘積

  var div = n / 3;
  if(div <= 1) {
    var one = Math.floor(n / 2);
    var two = n - one;
    return one * two;
  }

  div = Math.floor(div);
  var mod = n % 3;
  var ans = 1;

  if(mod === 0) {

    for(var i = 0; i < div; i++) {
      ans *= 3;
    }
  } else if(mod === 1) {
    for(var i = 0; i < div - 1; i++) {
      ans *= 3;
    }

    ans *= 4;
  } else if(mod === 2) {
    for(var i = 0; i < div; i++) {
      ans *= 3;
    }

    ans *= 2;
  }
  return ans;
};
