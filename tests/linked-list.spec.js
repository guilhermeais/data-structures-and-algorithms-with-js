import assert from "assert";
import { beforeEach, describe, it } from "node:test";
import { LinkedList } from "../linked-list/linked-list.js";

describe("LinkedList", () => {
  describe("getElementAt()", () => {
    it("should return the element in a given position", () => {
      const linkedList = new LinkedList();

      linkedList.push("Guilherme");
      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.getElementAt(0).value, "Guilherme");
      assert.strictEqual(linkedList.getElementAt(1).value, "Ana");
      assert.strictEqual(linkedList.getElementAt(2).value, "Beatriz");
      assert.strictEqual(linkedList.getElementAt(3)?.value, undefined);
    });
  });

  describe("removeAt()", () => {
    it("should remove the element at the given position", () => {
      const linkedList = new LinkedList();

      linkedList.push("Guilherme");
      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.removeAt(1), "Ana");
      assert.strictEqual(linkedList.size(), 2);
      assert.strictEqual(linkedList.getElementAt(0).value, "Guilherme");
      assert.strictEqual(linkedList.getElementAt(1).value, "Beatriz");
    });

    it("should return undefined if the index is out of range", () => {
      const linkedList = new LinkedList();

      linkedList.push("Guilherme");
      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.removeAt(5), undefined);
      assert.strictEqual(linkedList.size(), 3);
    });

    it("should remove the element at the given position", () => {
      const linkedList = new LinkedList();

      linkedList.push("Guilherme");
      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.removeAt(1), "Ana");
      assert.strictEqual(linkedList.size(), 2);
      assert.strictEqual(linkedList.getElementAt(0).value, "Guilherme");
      assert.strictEqual(linkedList.getElementAt(1).value, "Beatriz");
    });

    it("should remove the first element", () => {
      const linkedList = new LinkedList();

      linkedList.push("Guilherme");
      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.removeAt(0), "Guilherme");
      assert.strictEqual(linkedList.size(), 2);
      assert.strictEqual(linkedList.getElementAt(0).value, "Ana");
      assert.strictEqual(linkedList.getElementAt(1).value, "Beatriz");
    });
  });

  describe("insert()", () => {
    it("should insert an element on head", () => {
      const linkedList = new LinkedList();

      linkedList.push("Ana");
      linkedList.push("Beatriz");
      assert.strictEqual(linkedList.getElementAt(0).value, "Ana");

      linkedList.insert("Guilherme", 0);

      assert.strictEqual(linkedList.size(), 3);
      assert.strictEqual(linkedList.getElementAt(0).value, "Guilherme");
      assert.strictEqual(linkedList.getElementAt(1).value, "Ana");
      assert.strictEqual(linkedList.getElementAt(2).value, "Beatriz");
    });

    it("should insert an element on middle", () => {
      const linkedList = new LinkedList();

      linkedList.push("Ana");
      linkedList.push("Beatriz");
      assert.strictEqual(linkedList.getElementAt(1).value, "Beatriz");

      linkedList.insert("Guilherme", 1);

      assert.strictEqual(linkedList.size(), 3);
      assert.strictEqual(linkedList.getElementAt(0).value, "Ana");
      assert.strictEqual(linkedList.getElementAt(1).value, "Guilherme");
      assert.strictEqual(linkedList.getElementAt(2).value, "Beatriz");
    });
  });

  describe("indexOf()", () => {
    it("should return -1 of the element does not exists", () => {
      const linkedList = new LinkedList();

      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.indexOf("Guilherme"), -1);
    });

    it("should return the index of the element", () => {
      const linkedList = new LinkedList();

      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.indexOf("Ana"), 0);
      assert.strictEqual(linkedList.indexOf("Beatriz"), 1);
    });

    it("should return the index of complex objects", () => {
      const linkedList = new LinkedList((a, b) => a.name === b.name);
      const obj1 = { name: "Ana", age: 20 };
      const obj2 = { name: "Beatriz", age: 30 };

      linkedList.push(obj1);
      linkedList.push(obj2);

      assert.strictEqual(linkedList.indexOf(obj1), 0);
      assert.strictEqual(linkedList.indexOf(obj2), 1);
    });
  });

  describe('remove()', () => {
    it('should remove a element', () => {
      const linkedList = new LinkedList();

      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.remove("Ana"), 'Ana');
      assert.strictEqual(linkedList.size(), 1);
      assert.strictEqual(linkedList.getElementAt(0).value, "Beatriz");
    });

    it('should return undefined if the element does not exists', () => {
      const linkedList = new LinkedList();

      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.remove("Guilherme"), undefined);
      assert.strictEqual(linkedList.size(), 2);
    });

    it('should remove the first element', () => {
      const linkedList = new LinkedList();

      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.remove("Ana"), 'Ana');
      assert.strictEqual(linkedList.size(), 1);
      assert.strictEqual(linkedList.getElementAt(0).value, "Beatriz");
    });

    it('should remove an element that is an object', () => {
      const linkedList = new LinkedList((a, b) => a.name === b.name);
      const anaObject = { name: "Ana", age: 20 };
      const beatrizObj = { name: "Beatriz", age: 30 };

      linkedList.push(anaObject);
      linkedList.push(beatrizObj);

      assert.strictEqual(linkedList.remove(anaObject), anaObject);
      assert.strictEqual(linkedList.size(), 1);
      assert.strictEqual(linkedList.getElementAt(0).value, beatrizObj);
    });
  });

  describe('toString()', () => {
    it('should return a string representation of the list', () => {
      const linkedList = new LinkedList();

      linkedList.push("Ana");
      linkedList.push("Beatriz");

      assert.strictEqual(linkedList.toString(), "Ana, Beatriz");
    });

    it('should return an empty string if the list is empty', () => {
      const linkedList = new LinkedList();

      assert.strictEqual(linkedList.toString(), "");
    });
  });
});
