
// LINK: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

/*
Runtime: 68 ms, faster than 93.54% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
*/
var getDecimalValue = function (head) {
  let arr = [];
  let acc = 0;
  let current = head;
  while (current != null) {
    arr.unshift(current.val);
    current = current.next;
  }

  for (let i = 0, n = arr.length; i < n; i++) {
    if (arr[i]) acc += 2 ** i;
  }

  return acc;
};
