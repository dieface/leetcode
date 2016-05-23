/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  return n % 4 > 0;
};

var input = "4";
var output = canWinNim(input);

console.log('input: ', input);
console.log('output: ', output);
