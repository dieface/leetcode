// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/*
122. Best Time to Buy and Sell Stock II

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length <= 1) return 0;

  var deltas = [];
  for(var i = 1; i < prices.length; i++) {
    deltas.push(prices[i] - prices[i-1]);
  }

  var profit = 0;
  deltas.forEach(function(d) {
    if(d > 0) profit += d;
  });

  return profit;
};
