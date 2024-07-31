/**
 * Definition for singly-linked list.
 * function Node(value, next) {
 *     this.value = (value===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { Node } from "./node.js";

/**
 * @param {Node} list1
 * @param {Node} list2
 * @return {Node}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new Node(-5999999);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 !== null ? list1 : list2;

  return dummy.next;
};

const merged = mergeTwoLists(
  new Node(1, new Node(2, new Node(4))),
  new Node(1, new Node(2, new Node(3, new Node(4))))
);

console.log(merged.toString());
