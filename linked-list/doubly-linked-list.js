import { defaultEquals } from "./default-equals.js";
import { DoublyNode } from "./doubly-node.js";
import { LinkedList } from "./linked-list.js";

export class DoublyLinkedList extends LinkedList {
  /**
   * @type {DoublyNode} element
   */
  tail = null;
  /**
   * @type {DoublyNode} element
   * */
  head = null;
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    const newNode = new DoublyNode(element);
    this.count++;
    if (index === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        const oldHead = this.head;
        oldHead.prev = newNode;
        newNode.next = oldHead;
        this.head = newNode;
      }

      return true;
    }

    const insertingOnLastPosition = index === this.count - 1;

    if (insertingOnLastPosition) {
      const oldTail = this.tail;
      oldTail.next = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;

      return true;
    }

    const previousNode = this.getElementAt(index - 1);
    const currentNodeOnGivenIndex = previousNode.next;

    newNode.prev = previousNode;
    newNode.next = currentNodeOnGivenIndex;
    previousNode.next = newNode;
    currentNodeOnGivenIndex.prev = newNode;

    return true;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let removedElement;

    if (index === 0) {
      removedElement = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      this.count--;

      return removedElement;
    }

    if (index === this.count - 1) {
      removedElement = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
      this.count--;

      return removedElement;
    }

    const previousNode = this.getElementAt(index - 1);
    console.log("previousNode: ", previousNode.value);
    const nodeToRemove = previousNode.next;
    const nextNode = nodeToRemove.next;

    previousNode.next = nextNode;
    nextNode.prev = previousNode;

    removedElement = nodeToRemove;
    this.count--;

    return removedElement;
  }
}
