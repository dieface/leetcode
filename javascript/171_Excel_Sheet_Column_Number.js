// https://leetcode.com/problems/excel-sheet-column-number/

/*
171. Excel Sheet Column Number

Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28

*/

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var sArr = s.split('');
  var full = 26;
  var offset = 64;
  var column = 0;
  var digits = sArr.length - 1;

  console.log('arr: ', sArr);
  sArr.forEach(function(ch, i) {
    var base = Math.pow(full, digits - i);
    var number = ch.toUpperCase().charCodeAt(0) - offset;
    column += number * base;
  });

  return column;
};

var input = 'AA';
var output = titleToNumber(input);

console.log('input: ', input);
console.log('output: ', output);
