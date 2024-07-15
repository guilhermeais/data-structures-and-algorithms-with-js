export class Queue {
  #count = 0;
  #firstElement = 0;
  #items = new Map();

  enqueue(element) {
    this.#items.set(this.#count, element);
    this.#count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.#items.get(this.#firstElement);
    this.#items.delete(this.#firstElement);
    this.#firstElement++;
    return result;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#firstElement;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items.get(this.#firstElement);
  }

  clear() {
    this.#items = new Map();
    this.#count = 0;
    this.#firstElement = 0;
  }
}
