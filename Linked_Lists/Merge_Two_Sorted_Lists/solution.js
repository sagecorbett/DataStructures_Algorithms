// Link: https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


let mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode();
  let head = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }

    dummy = dummy.next;
  }

  // in the case that p2 has reached its end but p1 still has nodes
  // just add them onto the end of the list
  dummy.next = l1 || l2;

  return head.next;
};
