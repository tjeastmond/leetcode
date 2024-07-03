// Remove Duplicates from Sorted List II
// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
const { createNodeList, ListNode, logNodeList } = require("./_utils/listNode");

var deleteDuplicates2 = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0);
  dummy.next = head;

  let current = dummy;
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      let val = current.next.val;
      while (current.next && current.next.val === val) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};

// Tests
const head = [1, 2, 3, 3, 4, 4, 5];
let dedup = deleteDuplicates2(createNodeList(head));
logNodeList(dedup); // [1, 2, 5]
