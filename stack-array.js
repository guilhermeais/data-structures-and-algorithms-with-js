import { AbstractStack } from "./abstract-stack.js";

export class StackArray extends AbstractStack {
  #items = [];

  push(...elements) {
    this.#items.push(...elements);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  get size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
  }
}
