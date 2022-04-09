// Link: //www.codewars.com/kata/5268956c10342831a8000135/

/*
A Node has the following properties:
var data; // A number or string.
Node left; // Undefined if there is no left child.
Node right; // Undefined if there is no right child.
*/

// 1.) Root node, 2.) traverse left subtree, 3.) traverse right subtree.
https: function preOrder(node, arr = []) {
  arr.push(node.data);

  if (node.left) preOrder(node.left, arr);

  if (node.right) preOrder(node.right, arr);

  return arr;
}

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node, arr = []) {
  if (node.left) inOrder(node.left, arr);

  arr.push(node.data);

  if (node.right) inOrder(node.right, arr);

  return arr;
}

// 1.) Traverse left subtree, 2.) traverse right subtree, 3.) root node.
function postOrder(node, arr = []) {
  if (node.left) postOrder(node.left, arr);

  if (node.right) postOrder(node.right, arr);

  arr.push(node.data);

  return arr;
}
