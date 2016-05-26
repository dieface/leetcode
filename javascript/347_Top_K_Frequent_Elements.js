// https://leetcode.com/problems/top-k-frequent-elements/

/*
347. Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var times = {};

  nums.forEach(function(n) {
    if(!times[n]) {
      times[n] = 1;
    } else {
      times[n]++;
    }
  });

  var elements = Object.keys(times);
  var counts = elements.map(function(e){
    return times[e];
  });

  var result = [];
  for(var i = 0; i < k; i++) {
    var maxNum = Math.max.apply(null, counts);
    var maxIndex = counts.indexOf(maxNum);
    var maxElem = elements[maxIndex];

    counts.splice(maxIndex, 1);
    elements.splice(maxIndex, 1);

    result.push(parseInt(maxElem));
  }

  return result;
};

var input = [1,1,1,2,2,3, 3, 3, 3];
var rank = 2;
var output = topKFrequent(input, rank);

console.log('input: ', input);
console.log('output: ', output);
