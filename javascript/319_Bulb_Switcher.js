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
  function setup(arr) {
    for(var i = 1; i < n + 1; i++) {
        arr.push(i % 2);
    }
  }

  function toggle(status) {

    if(status) {
      return 0;
    }

    return 1;
  }

  switch (n) {
    case 0:
      return 0;
    case 1:
      return n;
    case 2:
      return Math.floor(n/2);
    default:
      var arr = [];
      setup(arr);
      //console.log('setup: ', arr);

      for(var i = 3; i < n - 1; i++) {
        //console.log('arr: ', arr);

        for(var j = i - 1; j < n - 1; j+=i) {
          var newStatus = toggle(arr[j]);
          arr = arr.slice(0, j).concat(newStatus).concat(arr.slice(j + 1));
        }
      }

      //console.log('after loop: ', arr);

      var last = arr.pop();
      arr.push(toggle(last));
      //console.log('final: ', arr);

      return arr.filter(function(status) { return status;}).length;
  }
};

var input = 8;
var output = bulbSwitch(input);

console.log('input: ', input);
console.log('output: ', output);
