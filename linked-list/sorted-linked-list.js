import { defaultEquals } from "./default-equals.js";
import { LinkedList } from "./linked-list.js";

export const COMPARE = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

function defaultCompare(a, b) {
  if (a === b) {
    return COMPARE.EQUALS;
  }

  return a < b ? COMPARE.LESS_THAN : COMPARE.BIGGER_THAN;
}

export class SortedLinkedList extends LinkedList {
  compareFn = defaultCompare;

  constructor(compareFn = defaultCompare, equalsFn = defaultEquals) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }

    const index = this.#getIndexNextSortedElement(element);
    return super.insert(element, index);
  }

  #getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;

    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === COMPARE.LESS_THAN) {
        return i;
      }

      current = current.next;
    }

    return i;
  }
}
