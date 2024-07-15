import assert from "assert";
import { describe, it } from "node:test";
import { palindromeChecker } from "../palindrome-checker.js";

describe("palindrome checker", () => {
  it("should return false if the string is not an palondrime", () => {
    assert.strictEqual(palindromeChecker("hello"), false);
  });

  it("should return false if the string is empty", () => {
    assert.strictEqual(palindromeChecker(""), false);
  });

  [
    "eye",
    "racecar",
    "ovo",
    "roma é amor",
    "osso",
    "ana é ana",
  ].forEach((palindrome) => {
    it(`should return true if the string is an palondrime (${palindrome})`, () => {
      assert.strictEqual(palindromeChecker(palindrome), true);
    });
  });
});
