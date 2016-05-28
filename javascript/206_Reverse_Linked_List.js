// https://leetcode.com/problems/reverse-linked-list/

/*
206. Reverse Linked List

Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head) {} else { return head; }

  var prev;
  while(head) {
    var tmp = head.next;
    head.next = prev;
    prev = head;
    head = tmp;
  }

  return prev;
};
