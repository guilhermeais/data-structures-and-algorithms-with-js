import { Node } from "./node.js";

export class DoublyNode extends Node {
  /**
   * @type {DoublyNode} Próximo nó
   */
  next;

  /**
   * @type {DoublyNode} Nó anterior
   */
  prev;
  
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
