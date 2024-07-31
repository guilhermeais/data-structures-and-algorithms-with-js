export class Node {
  /**
   * @type {any} Valor do nó
   */
  value;

  /**
   * @type {Node} Próximo nó
   */
  next;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    let result = `${this.value}`;

    if (this.next) {
      result += ` -> ${this.next.toString()}`;
    }

    return result
  }
}
