// Link: https://www.codewars.com/kata/55beec7dd347078289000021/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let count = 0;
  while (head) {
    head = head.next;
    count++;
  }

  return count;
}

function count(head, data) {
  let count = 0;
  while (head) {
    if (head.data === data) count++;
    head = head.next;
  }

  return count;
}
