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
var deleteDuplicates = function (head) {
  if (!head) return head;
  /*
    since this is sorted my idea is that I can just move forward through the 
    list comparing the node I am looking at with the previous node. If they are
    the same (current and previous) then leave previous as it is and move forward
    until they do not match. Once they don't match update previous next value to point to the n     new node and then set previous to this node and move forward
    */
  let previous = head;
  let current = head.next;

  while (current) {
    // if we found a value that was previously seen just move forward
    if (current.val === previous.val) 
        current = current.next;
    else {
      // else we have found a new unseen value. Update the previous node to point to this
      previous.next = current;
      // previous should now point to this node
      previous = current;

      // move forward a node for the next iteration
      current = current.next;
    }
  }

  // in the case where we only see the values at the end of the list previous will never have its next updated
  // example ( 1 ) --> ( 1 ) --> ( 1 )
  // since previous is essentially the end of the linked list just make its final "next" value point to null
  previous.next = null;

  
  return head;
};
