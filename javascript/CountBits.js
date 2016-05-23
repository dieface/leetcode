/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = [];
    var i;

    result[0] = 0;

    for (i = 1; i <= num; i++) {
       result[i] = result[i >> 1] + (i & 1);
    }

    return result;
};

var input = "5";
var output = countBits(input);

console.log('input: ', input);
console.log('output: ', output);
