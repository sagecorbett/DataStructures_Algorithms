// LINK: https://leetcode.com/problems/intersection-of-two-linked-lists/



// function that returns the length of a linked list
var getLength = function(head){
    
    let count = 0
    while(head){
        count++
        head = head.next
    }
    return count
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
   // in the case where the linked lists are the same length
   // we can find the intersection by increasing the pointers by 1
   // every iteration. But there are cases where headA might be longer than headB
   // to handle this I am going to use the difference method by getting the length 
   // of each list and I will incease the starting point in the longer list by the diff
    let lenA = getLength(headA)
    let lenB = getLength(headB)
    
    // get reference to both lists. Keeping this just so references to headA and headB stay
    // the same. Idk if this is best practice but it just seems like it
    let a = headA
    let b = headB
    
    let diff = Math.abs(lenA - lenB)
    
    // if headA is longer than increase it to match the starting point of b
    if(lenA > lenB){
        while(diff > 0){
            a = a.next
            diff--
        }
    }
    // same logic but for B
    else if(lenB > lenA){
        while(diff > 0){
            b = b.next
            diff--
        }
    }
    
    // iterate through the linked list looking for the two pointers referencing the same 
    // node. 
    while(a !== b){
        a = a.next
        b = b.next
    }
    
    return a
};