/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Link: https://leetcode.com/problems/merge-in-between-linked-lists/

// Solution 1
var mergeInBetween = function (list1, a, b, list2) {
  let head = list1;
  let diff = Math.abs(a - 1 - b);
  while (a - 1 > 0) {
    list1 = list1.next;
    a--;
  }

  let temp = list1;
  while (diff >= 0) {
    temp = temp.next;
    diff--;
  }

  list1.next = list2;
  while (list2.next) {
    list2 = list2.next;
  }

  list2.next = temp;

  return head;
};




// Solution 2
var mergeInBetween = function (list1, a, b, list2) {
  let head = list1;
  let aStart;
  // loop forward until we are 1 past the bth node.
  // (finding the ath-1 node along the way) when (a-1) is found set
  // the aStart pointer to it.
  while (b >= 0) {
    // check for (a - 1) position
    if (a - 1 === 0) aStart = list1;

    list1 = list1.next;
    b--;
    a--;
  }
  // list1 now points to the (bth+1) node

  // find tail of list2
  let list2Tail = list2;
  while (list2Tail.next) {
    list2Tail = list2Tail.next;
  }

  // Just need stitch the lists together now
  // point aStart.next to the start of list2
  aStart.next = list2;

  // set list2's tail to now point at the remainder of list1
  list2Tail.next = list1;

  return head;
};



