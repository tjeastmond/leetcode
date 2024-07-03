// https://leetcode.com/problems/reverse-linked-list/

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
const reverseList = function (head) {
  if (!head || !head.next) return head;

  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

const r = reverseList(createNodeList([1, 2, 3, 4, 5]));
console.log(r);
