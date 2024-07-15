import assert from "assert";
import { StackArray } from "../stack-array.js";
import { StackObject } from "../stack-object.js"; // Supondo que você tenha outra implementação chamada StackObject
import { describe, beforeEach, it } from "node:test";

const implementations = [
  { name: StackArray.name, Stack: StackArray },
  { name: StackObject.name, Stack: StackObject },
];

implementations.forEach(({ name, Stack }) => {
  describe(`Stack implementation: ${name}`, () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it("should start empty", () => {
      assert.strictEqual(stack.isEmpty(), true);
      assert.strictEqual(stack.size, 0);
    });

    it("should push elements to the stack", () => {
      stack.push(1);
      assert.strictEqual(stack.isEmpty(), false);
      assert.strictEqual(stack.size, 1);
      assert.strictEqual(stack.peek(), 1);

      stack.push(2, 3);
      assert.strictEqual(stack.size, 3);
      assert.strictEqual(stack.peek(), 3);
    });

    it("should pop elements from the stack", () => {
      stack.push(1, 2, 3);
      assert.strictEqual(stack.pop(), 3);
      assert.strictEqual(stack.size, 2);
      assert.strictEqual(stack.peek(), 2);

      assert.strictEqual(stack.pop(), 2);
      assert.strictEqual(stack.size, 1);
      assert.strictEqual(stack.peek(), 1);

      assert.strictEqual(stack.pop(), 1);
      assert.strictEqual(stack.isEmpty(), true);
    });

    it("should peek the top element without removing it", () => {
      stack.push(1, 2, 3);
      assert.strictEqual(stack.peek(), 3);
      assert.strictEqual(stack.size, 3);
    });

    it("should return undefined when popping from an empty stack", () => {
      assert.strictEqual(stack.pop(), undefined);
    });

    it("should return undefined when peeking into an empty stack", () => {
      assert.strictEqual(stack.peek(), undefined);
    });

    it("should perform load test", () => {
      const operations = 1000000;
      console.time(`${name} - Load Test`);

      for (let i = 0; i < operations; i++) {
        stack.push(i);
      }

      for (let i = 0; i < operations; i++) {
        stack.pop();
      }

      console.timeEnd(`${name} - Load Test`);
    });
  });
});
