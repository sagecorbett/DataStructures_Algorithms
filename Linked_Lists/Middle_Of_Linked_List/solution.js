/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// UPDATED SOLUTION










// ORIGINAL SOLUTION
var middleNode = function (head) {
  // the plan is to use the turtle and the hare algorithm with
  // two pointers and the second one will move twice as fast.
  // When the fast pointer is at the end then the slow pointer will be half
  // way through
  let slow = head;
  let fast = head.next;
  while (fast) {
    // try catch to check for when fast.next.next is out of bounds.
    // if it is reset to fast.next this will account for the case when
    // we have an even amount of nodes and the middle (per this problem) is the
    // node to the right
    try {
      fast = fast.next.next;
    } catch (err) {
      fast = fast.next;
    }
    slow = slow.next;
  }

  return slow;
};
