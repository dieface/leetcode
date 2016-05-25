// https://leetcode.com/problems/valid-anagram/

/*
242. Valid Anagram

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  var sArr = s.split('');

  t.split('').forEach(function(ch) {
    var index = sArr.indexOf(ch);
    if(index !== -1) sArr.splice(index, 1);
  });

  return sArr.length === 0;
};

var input1 = 'rat';
var input2 = 'car';
var output = isAnagram(input1, input2);

console.log('input1: ', input1);
console.log('input2: ', input2);
console.log('output: ', output);
