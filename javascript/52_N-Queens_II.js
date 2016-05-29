// https://leetcode.com/problems/n-queens-ii/

/*
52. N-Queens II

Follow up for N-Queens problem.

Now, instead outputting board configurations, return the total number of distinct solutions.
*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  var usedColumns = new Array(n);
  var sum = 0;
  placeQueen(usedColumns, 0);
  return sum;

  function placeQueen(cols, row) {
    var len = cols.length;

    if(row === len) {
      sum++;
      return;
    }

    for(var i = 0; i < len; i++) {
      if(isValid(cols, row, i) {
        cols[row] = i;
        placeQueen(cols, row + 1);
      }
    }
  }

  function isValid(cols, row, col) {
    for(var i = 0; i < row; i++) {
      if(cols[i] === col) {
        return false;
      }

      if((row - i) === Math.abs(col - cols[i])) {
        return false;
      }
    }

    return true;
  }
};
