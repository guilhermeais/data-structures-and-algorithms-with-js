import assert from "assert";
import { beforeEach, describe, it } from "node:test";
import { Deque } from "../deque.js";

describe("Deque", () => {
  /**
   * @type {Deque}
   */
  let deque;

  beforeEach(() => {
    deque = new Deque();
  });

  describe("addFront()", () => {
    it("should add elements to the front", () => {
      deque.addFront('Guilherme');
      deque.addFront('João');
      assert.strictEqual(deque.size(), 2);
      assert.strictEqual(deque.toString(), 'João,Guilherme');
      assert.strictEqual(deque.peekFront(), 'João');
    });
  });

  describe("addBack()", () => {
    it("should add elements to the back", () => {
      deque.addBack(1);
      deque.addBack(2);
      assert.strictEqual(deque.peekBack(), 2);
      assert.strictEqual(deque.size(), 2);
      assert.strictEqual(deque.toString(), '1,2');
    });
  });

  describe("removeFront()", () => {
    it("should remove elements from the front", () => {
      deque.addFront(1);
      deque.addFront(2);
      assert.strictEqual(deque.toString(), '2,1')
      assert.strictEqual(deque.removeFront(), 2);
      assert.strictEqual(deque.toString(), '1');
      assert.strictEqual(deque.size(), 1);
    });
  });

  describe("removeBack()", () => {
    it("should remove elements from the back", () => {
      deque.addBack(1);
      deque.addBack(2);
      assert.strictEqual(deque.toString(), '1,2');
      assert.strictEqual(deque.removeBack(), 2);
      assert.strictEqual(deque.toString(), '1');
      assert.strictEqual(deque.size(), 1);
    });
  });

  describe("peekFront()", () => {
    it("should peek at the front element", () => {
      deque.addFront(1);
      deque.addFront(2);
      assert.strictEqual(deque.toString(), '2,1');
      assert.strictEqual(deque.peekFront(), 2);
    });
  });

  describe("peekBack()", () => {
    it("should peek at the back element", () => {
      deque.addBack(1);
      deque.addBack(2);
      assert.strictEqual(deque.peekBack(), 2);
    });
  });

  describe("isEmpty()", () => {
    it("should check if the deque is empty", () => {
      assert.strictEqual(deque.isEmpty(), true);
      deque.addFront(1);
      assert.strictEqual(deque.isEmpty(), false);
    });
  });

  describe("size()", () => {
    it("should return the correct size", () => {
      assert.strictEqual(deque.size(), 0);
      deque.addFront(1);
      assert.strictEqual(deque.size(), 1);
      deque.addBack(2);
      assert.strictEqual(deque.size(), 2);
    });
  });
});
