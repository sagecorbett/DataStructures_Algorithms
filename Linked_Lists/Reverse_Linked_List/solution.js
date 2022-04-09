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
var reverseList = function (head) {
  // have two pointers current and previous
  // as we move through the linked list take currents "next" value and point it to the
  // previously seen value
  let previous = null;
  let current = head;

  while (current) {
    // get reference to the next node in list before breaking the list
    let next = current.next;

    // set our current nodes next value to be the previous node
    current.next = previous;

    // update previous to now reference current
    previous = current;

    // move on to the next node by updating current to now represent the
    // orignal "next" node
    current = next;
  }

  return previous;
};
