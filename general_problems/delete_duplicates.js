// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function createNodeList(arrayVals) {
  let head = new ListNode(arrayVals[0]);
  let current = head;

  for (let i = 1; i < arrayVals.length; i++) {
    current.next = new ListNode(arrayVals[i]);
    current = current.next;
  }

  return head;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// Tests
// const head = [1, 1, 1, 2, 3, 3];
const head = [1, 1, 1];
console.log("original: ", createNodeList(head)); // [1,2,3]
console.log("filtered: ", deleteDuplicates(createNodeList(head))); // [1,2,3]
