export class AbstractStack {
  push(...elements) {
    throw new Error("This method must be overridden");
  }

  pop() {
    throw new Error("This method must be overridden");
  }

  peek() {
    throw new Error("This method must be overridden");
  }

  isEmpty() {
    throw new Error("This method must be overridden");
  }

  get size() {
    throw new Error("This method must be overridden");
  }

  clear() {
    throw new Error("This method must be overridden");
  }
}
