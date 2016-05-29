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
    var len = words.length,
        arr = [],
        result = 0,
        i,
        j;

    for (i = 0; i < len; i++) {
        // console.log('i: ', i);
        // console.log('word: ', words[i]);

        arr[i] = 0;
        // console.log('reset arr: ', arr);

        for (j = 0; j < words[i].length; j++) {
            // console.log('j: ', j);
            // console.log('ch: ', words[i].split('')[j]);
            // console.log('code: ', words[i].charCodeAt(j));
            // console.log('code - 97: ', words[i].charCodeAt(j) - 97);
            // console.log('shifted code - 97: ', 2 << (words[i].charCodeAt(j) - 97));

            arr[i] |= (4 << (words[i].charCodeAt(j)));
            // console.log('arr: ', arr);

        }
        // console.log('--------------------------');
    }

    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if ((arr[i] & arr[j]) === 0) {
                result = Math.max(result, words[i].length * words[j].length);
            }
        }
    }

    return result;
};


var input = ["abcw","baz","foo","bar","xtfn","abcdef"];
var output = maxProduct(input);

console.log('output: ', output);
