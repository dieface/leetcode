// https://leetcode.com/problems/maximum-product-of-word-lengths/

/*
318. Maximum Product of Word Lengths

Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

Example 1:
Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
Return 16
The two words can be "abcw", "xtfn".

Example 2:
Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]
Return 4
The two words can be "ab", "cd".

Example 3:
Given ["a", "aa", "aaa", "aaaa"]
Return 0
No such pair of words.
*/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  var max = 0;

  for(var i = 0; i < words.length - 1; i++) {
    var w1 = words[i];

    for(var j = i + 1; j < words.length; j++) {
      var w2 = words[j];

      if(!hasCommon(w1, w2)) {
        var product = w1.length * w2.length;
        if(product > max) max = product;
      }
    }
  }

  return max;

  function hasCommon(w1, w2) {
    var checklist = new Set();

    var len1 = w1.length;
    var len2 = w2.length;

    for(var i = 0; i < len1; i++) {
      var ch = w1[i];
      if(!checklist.has(ch)) { checklist.add(ch); }
    }

    for(var j = 0; j < len2; j++) {
      var ch = w2[j];
      if(checklist.has(ch)) return true;
    }

    return false;
  }
};
