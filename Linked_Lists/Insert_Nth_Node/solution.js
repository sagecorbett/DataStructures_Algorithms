// Link: https://www.codewars.com/kata/55cacc3039607536c6000081/

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let curr = head;
  // create new node with data given
  let newNode = new Node(data);

  // if head given is null just return the new node as the head
  if (!curr) return newNode;

  // if the newNode should be the new head
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }

  // move forward through the linked list until we find the node that points to the index we
  // want to add the new node to. 
  while (index > 1 && copy) {
    curr = curr.next;
    index--;
  }

  // stitch in the new node
  newNode.next = curr.next;
  curr.next = newNode;

  return head;
}
