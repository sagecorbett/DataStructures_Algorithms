// LINK: https://leetcode.com/problems/design-browser-history/

// DOUBLY LINKED LIST SOLUTION
/**
 * @param {string} homepage
 */
function Node(url, prev = null) {
  this.url = url;
  this.next = null;
  this.prev = prev;
}

var BrowserHistory = function (homepage) {
  this.history = new Node(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.history.next = new Node(url, this.history);
  this.history = this.history.next;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let current = this.history;
  while (current.prev && steps) {
    let temp = current.prev;
    temp.next = current;
    current = temp;
    steps--;
  }
  this.history = current;
  return current.url;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let current = this.history;
  while (current.next && steps) {
    let temp = current.next;
    temp.prev = current;
    current = temp;
    steps--;
  }
  this.history = current;
  return current.url;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
