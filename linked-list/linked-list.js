import { defaultEquals } from "./default-equals.js";
import { Node } from "./node.js";

export class LinkedList {
  count = 0;
  /**
   * @type {Node} Cabeça da lista
   */
  head = null;
  equalsFn = defaultEquals;

  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
  }

  /**
   * @description Adiciona um elemento ao final da lista
   */
  push(element) {
    const node = new Node(element);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  /**
   * @description Remove um elemento de uma posição específica da lista
   */
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let nodeToRemove = this.head;

    if (index === 0) {
      this.head = nodeToRemove.next;
    } else {
      let previousNode = this.getElementAt(index - 1); // Busca o nó anterior ao que vai ser removido
      nodeToRemove = previousNode.next; // O nó a ser removido é o próximo do anterior

      previousNode.next = nodeToRemove?.next; // O próximo do anterior passa a ser o próximo do nó a ser removido
    }

    this.count--;
    return nodeToRemove.value;
  }

  /**
   * @default Retorna o elemento na posição do index
   */
  getElementAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let current = this.head;

    for (let i = 0; i < index && !!current; i++) {
      current = current.next;
    }

    return current;
  }

  /**
   * @description Adiciona um elemento em uma posição específica da lista
   */
  insert(element, index) {
    if (index < 0 || index > this.count) {
      return false;
    }

    const newNode = new Node(element);

    if (index === 0) {
      const oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    } else {
      const previousNode = this.getElementAt(index - 1);
      const currentNodeOnGivenIndex = previousNode.next;

      previousNode.next = newNode;
      newNode.next = currentNodeOnGivenIndex;
    }

    this.count++;
    return true;
  }

  /**
   * @description Retorna a posição de um elemento na lista, se não existir retorna -1
   */
  indexOf(element) {
    let current = this.head;

    for (let i = 0; i < this.count && !!current; i++) {
      if (this.equalsFn(element, current.value)) {
        return i;
      }

      current = current.next;
    }

    return -1;
  }

  /**
   * @description Remove um elemento da lista
   */
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index);
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head == null) {
      return "";
    }

    let objString = `${this.head.value}`;
    let current = this.head.next;

    for (let i = 1; i < this.count && !!current; i++) {
      objString = `${objString}, ${current.value}`;
      current = current.next;
    }

    return objString;
  }
}
