export class Deque {
  #count = 0;
  #firstElement = 0;
  #items = new Map();

  /**
   *
   * @description Adiciona um elemento na frente da fila. [O(1) quando a fila está vazia, O(n) quando a fila não está vazia]
   * @example
   * const deque = new Deque();
   * deque.addFront(1); // [1]
   * deque.addFront(2); // [2, 1]
   * deque.addFront(3); // [3, 2, 1]
   */
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
      return;
    }

    if (this.#firstElement > 0) {
      this.#firstElement--;
      this.#items.set(this.#firstElement, element);
      return;
    }

    for (let i = this.#count; i > 0; i--) {
      const item = this.#items.get(i - 1);
      this.#items.set(i, item);
    }

    this.#count++;
    this.#firstElement = 0;
    this.#items.set(0, element);
  }

  /**
   *
   * @description Adiciona um elemento no final da fila. [O(1)]
   * @example
   * const deque = new Deque();
   * deque.addBack(1); // [1]
   * deque.addBack(2); // [1, 2]
   */
  addBack(...elements) {
    elements.forEach((element) => {
      this.#items.set(this.#count, element);
      this.#count++;
    });
  }

  removeBack() {
    if (this.isEmpty()) return undefined;
    this.#count--;
    const top = this.#items.get(this.#count);
    this.#items.delete(this.#count);

    return top;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.#items.get(this.#firstElement);
    this.#items.delete(this.#firstElement);
    this.#firstElement++;
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items.get(this.#firstElement);
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items.get(this.#count - 1);
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#firstElement;
  }

  clear() {
    this.#items = new Map();
    this.#count = 0;
    this.#firstElement = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.#items.get(this.#firstElement)}`;
    for (let i = this.#firstElement + 1; i < this.#count; i++) {
      objString = `${objString},${this.#items.get(i)}`;
    }

    return objString;
  }
}
