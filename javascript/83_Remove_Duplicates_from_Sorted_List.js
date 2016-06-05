// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/*
83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
var deleteDuplicates = function(head) {
  if(!head) return head;

  var checklist = new Set();

  var node = head;

  while(node.next) {
    if(node.val === node.next.val) {
        node.next = node.next.next;
    } else {
        node = node.next;
    }
  }

  return head;
};
