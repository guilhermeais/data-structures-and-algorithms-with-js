import { AbstractStack } from "./abstract-stack.js";

export class StackObject extends AbstractStack {
  constructor() {
    super();
  }

  #items = {};
  #size = 0;

  push(...elements) {
    elements.forEach((element) => {
      this.#items[this.#size] = element;
      this.#size++;
    });
  }

  pop() {
    if (this.isEmpty()) return undefined;
    this.#size--;
    const top =  this.#items[this.#size];
    Reflect.deleteProperty(this.#items, this.#size)

    return top;
  }

  peek() {
    return this.#items[this.#size - 1];
  }

  isEmpty() {
    return this.#size === 0;
  }

  clear() {
    this.#items = {};
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }
}
