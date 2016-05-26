// https://leetcode.com/problems/product-of-array-except-self/

/*
238. Product of Array Except Self

Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var result = [];

  nums.forEach(function(n) {
    result.push(1);
  });

  var left = 1;
  for(var i = 0; i < nums.length - 1; i++) {
    left *= nums[i];
    result[i + 1] = left;
  }

  var right = 1;
  for(var i = nums.length - 1; i > 0; i--) {
    right *= nums[i];
    result[i-1] *= right;
  }

  return result;
};


//function CursorFromStart(nums){
//    // NOTE cursor to an array recording product in left side
//    this.index = 1;
//    this.productLeft = nums[0];
//    this.offsetRight = function(){
//        this.productLeft = this.productLeft * nums[this.index];
//        this.index++;
//
//        console.log('left product: ', this.productLeft);
//        console.log('left index: ', this.index);
//    };
//}
//
//function CursorFromEnd(nums){
//    // NOTE cursor to an array recording product in right side
//    this.index = 0;
//    this.productRight = productRightSide(1, nums);   // NOTE start from index 1
//    this.offsetRight = function(){
//        if (nums[this.index+1] !== 0){
//            this.productRight = this.productRight / nums[this.index+1];
//        } else {
//            this.productRight = productRightSide(this.index+2, nums);
//        }
//        this.index++;
//
//        console.log('right product: ', this.productRight);
//        console.log('right index: ', this.index);
//    };
//}
//
//function productRightSide(index, array){
//    var result = 1;
//    array.slice(index, array.length).forEach(function(n){
//        result *= n;
//    });
//    return result;
//}
//
//var productExceptSelf = function(nums) {
//
//    var result = [],
//        cur = new CursorFromStart(nums),
//        curFromEnd = new CursorFromEnd(nums);
//
//    // get first result from curFromEnd
//    result.push(curFromEnd.productRight);
//    console.log('init result: ', result);
//    console.log('init cur: ', cur);
//    console.log('init curFromEnd: ', curFromEnd);
//    curFromEnd.offsetRight();
//
//    // NOTE start from index 1
//    for (var i = 1; i < nums.length; i++) {
//        console.log('------ i: ', i);
//
//
//        console.log('cur: ', cur.productLeft);
//        console.log('curFromEnd: ', curFromEnd.productRight);
//
//        result.push(cur.productLeft * curFromEnd.productRight);
//        console.log('result: ', result);
//
//        console.log('- cur offset -');
//        cur.offsetRight();
//
//        console.log('- curFromEnd offset -');
//        curFromEnd.offsetRight();
//    }
//
//    return result;
//};

var input = [1,2,3,4];
var output = productExceptSelf(input);

console.log('input: ', input);
console.log('output: ', output);
