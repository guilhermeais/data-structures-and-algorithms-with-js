import assert, { deepStrictEqual } from "assert";
import { beforeEach, describe, it } from "node:test";
import { DoublyLinkedList } from "../linked-list/doubly-linked-list.js";

describe("DoublyLinkedList", () => {
  describe("insert()", () => {
    it("should insert a element at a given position", () => {
      const doublyLinkedList = new DoublyLinkedList();

      doublyLinkedList.insert("Guilherme", 0);
      assert.strictEqual(doublyLinkedList.size(), 1);
      assert.strictEqual(doublyLinkedList.head.value, "Guilherme");
      assert.strictEqual(doublyLinkedList.tail.value, "Guilherme");

      doublyLinkedList.insert("Camila", 1);

      assert.strictEqual(doublyLinkedList.size(), 2);
      assert.strictEqual(doublyLinkedList.head.value, "Guilherme");
      assert.strictEqual(doublyLinkedList.head.next.value, "Camila");
      assert.strictEqual(doublyLinkedList.tail.value, "Camila");
      assert.strictEqual(doublyLinkedList.tail.prev.value, "Guilherme");

      doublyLinkedList.insert("Ana", 1);

      assert.strictEqual(doublyLinkedList.size(), 3);

      assert.strictEqual(doublyLinkedList.head.value, "Guilherme");
      assert.strictEqual(doublyLinkedList.head.next.value, "Ana");
      assert.strictEqual(doublyLinkedList.head.next.next.value, "Camila");

      assert.strictEqual(doublyLinkedList.tail.value, "Camila");
      assert.strictEqual(doublyLinkedList.tail.prev.value, "Ana");
      assert.strictEqual(doublyLinkedList.tail.prev.prev.value, "Guilherme");
    });
  });

  describe("removeAt()", () => {
    it("should remove the element at a given position", () => {
      const doublyLinkedList = new DoublyLinkedList();

      doublyLinkedList.insert("Guilherme", 0);
      doublyLinkedList.insert("Camila", 1);
      doublyLinkedList.insert("Ana", 2);
      assert.strictEqual(doublyLinkedList.size(), 3);
      assert.strictEqual(doublyLinkedList.toString(), "Guilherme, Camila, Ana");

      const removedNode = doublyLinkedList.removeAt(1);

      assert.strictEqual(removedNode.value, "Camila");
      assert.strictEqual(doublyLinkedList.size(), 2);
      assert.strictEqual(doublyLinkedList.toString(), "Guilherme, Ana");
      assert.strictEqual(doublyLinkedList.head.value, "Guilherme");
      assert.strictEqual(doublyLinkedList.head.next.value, "Ana");
      assert.strictEqual(doublyLinkedList.tail.value, "Ana");
      assert.strictEqual(doublyLinkedList.tail.prev.value, "Guilherme");
    });
  });
});
