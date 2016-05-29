// https://leetcode.com/problems/bulb-switcher/

/*
319. Bulb Switcher

There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

Example:

Given n = 3.

At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off].

So you should return 1, because there is only one bulb is on.
*/

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
// 0 0 0 0 0 0 0 0 0 0    0
// 1 1 1 1 1 1 1 1 1 1    1
// 1 0 1 0 1 0 1 0 1 0    2
// 1 0 0 0 1 1 1 0 0 0    3
// 1 0 0 1 1 1 1 1 0 0    4
// 1 0 0 1 0 1 1 1 0 1    5
// 1 0 0 1 0 0 1 1 0 1    6
// 1 0 0 1 0 0 0 1 0 1    7
// 1 0 0 1 0 0 0 0 0 1    8
// 1 0 0 1 0 0 0 0 1 1    9
// 1 0 0 1 0 0 0 0 1 0    10
  return Math.floor(Math.sqrt(n));
};

var input = 8;
var output = bulbSwitch(input);

console.log('input: ', input);
console.log('output: ', output);
