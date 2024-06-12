// https://leetcode.com/problems/add-two-numbers

const { createNodeList, ListNode, logNodeList } = require("./_utils/listNode");

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
};

const list1 = createNodeList([2, 4, 3]);
const list2 = createNodeList([5, 6, 4]);
const result = addTwoNumbers(list1, list2);
logNodeList(result); // [7, 0, 8]
