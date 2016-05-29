// https://leetcode.com/problems/roman-to-integer/

/*
13. Roman to Integer

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
      if (!s || s.length === 0) {
            return 0;
      }

      var romanDict = {
         'I': 1,
         'V': 5,
         'X': 10,
         'L': 50,
         'C': 100,
         'D': 500,
         'M': 1000
      };

      var len = s.length;
      var res = romanDict[s.charAt(len - 1)];

      for (var i = len - 2; i >= 0; i--) {
          if (romanDict[s.charAt(i + 1)] <= romanDict[s.charAt(i)]) {
              res += romanDict[s.charAt(i)];
          } else {
              res -= romanDict[s.charAt(i)];
          }
      }
      return res;
};
