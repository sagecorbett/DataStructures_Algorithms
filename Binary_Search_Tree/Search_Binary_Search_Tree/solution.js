// LINK: https://leetcode.com/problems/search-in-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// RECURSIVE SOLUTION:
var searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) {
    return root;
  } else if (root.val < val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
};


// WHILE LOOP SOLUTION
var searchBST = function (root, val) {
  while (root) {
    if (root.val === val) return root;

    if (root.val < val) root = root.right;
    else if (root.val > val) root = root.left;
  }

  return null;
};