//https://leetcode.com/problems/reverse-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
//    var re = '';
//    for(var i = s.length; i > 0; i--) {
//        re = re + s[i - 1];
//    }
//    return re;
    var re = [];

    for(var i = 0; i < Math.floor(s.length); i++) {
        var mirrorIndex = s.length - 1 - i;
        re[i] = s[mirrorIndex];
        re[mirrorIndex] = s[i];
    }

    return re.join('');
};

var input = 'hello';

console.log('input: ', input);
console.log('output: ', reverseString(input));
