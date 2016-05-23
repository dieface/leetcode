/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var re = '';

    for(var i = s.length; i > 0; i--) {
        re = re + s[i - 1];
    }

    return re;
};

var input = 'hello';

console.log('input: ', input);
console.log('output: ', reverseString(input));
