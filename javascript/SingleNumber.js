/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var kv = {};

  nums.forEach(function(n) {
    if(kv[n]) {
      delete kv[n];
    } else {
      kv[n] = 1;
    }
  });

  return parseInt(Object.keys(kv)[0]);
};

var input = [1, 2, 3, 2, 3];
var output = singleNumber(input);

console.log('input: ', input);
console.log('output: ', output);

/* TODO: Could you implement it without using extra memory? */
