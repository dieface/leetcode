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

  var az = new Set();
  az.add('a');
  az.add('b');
  az.add('c');
  az.add('d');
  az.add('e');
  az.add('f');
  az.add('g');
  az.add('h');
  az.add('i');
  az.add('j');
  az.add('k');
  az.add('l');
  az.add('m');
  az.add('n');
  az.add('o');
  az.add('p');
  az.add('q');
  az.add('r');
  az.add('s');
  az.add('t');
  az.add('u');
  az.add('v');
  az.add('w');
  az.add('x');
  az.add('y');
  az.add('z');

        ml = collections.defaultdict(int)
        for w in words:
            num = sum( 1 << (ord(x) - ord( 'a' )) for x in set(w))
            ml[num] = max(ml[num], len(w))
            for x in set(string.lowercase) - set(w):
                es[ord(x) - ord( 'a' )].add(num)
        ans = 0
        for w in words:
            r = [es[ord(x) - ord( 'a' )] for x in w]
             if  not r: continue
            r = set.intersection(*r)
            for x in r:
                ans = max(ans, len(w) * ml[x])
        return ans
};
