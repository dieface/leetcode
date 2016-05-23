/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  var newNum = num ;

  while(String(newNum).length > 1) {
    var str = String(newNum);
    newNum = 0;

    for(var i = 0; i < str.length; i++) {
      newNum += parseInt(str[i]);
    }
  }

  return newNum;
};

var input = "12345";
var output = addDigits(input);

console.log('input: ', input);
console.log('output: ', output);

/* TODO: Could you do it without any loop/recursion in O(1) runtime? */

