/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var res = [];

  var statics = function(n) {
    var total = 0;
    var str = (n).toString(2);

    for(var i = 0; i < str.length; i++) {
      if(str[i] === '1') total += 1;
    }

    return total;
  }

  for (var i = 0; i <= num; i++) {
    res[i] = statics(i);
  }

  return res;
}


var input = "5";
var output = countBits(input);

console.log('input: ', input);
console.log('output: ', output);
