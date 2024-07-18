export class Node {
  /**
   * @type {any} Valor do nó
   */
  value;

  /**
   * @type {Node} Próximo nó
   */
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
