import { Deque } from "./deque.js";

export function palindromeChecker(aString) {
  if (typeof aString !== "string" || !aString) {
    return false;
  }

  const deque = new Deque();
  const lowercaseString = aString.toLowerCase();
  const cleanedString = removeNonAlphanumericChars(lowercaseString);

  deque.addBack(...cleanedString);

  while (deque.size() > 1) {
    if (deque.removeFront() !== deque.removeBack()) {
      return false;
    }
  }

  return true;
}

function removeNonAlphanumericChars(aString) {
  return aString.replace(/[^a-z0-9]/g, "");
}
