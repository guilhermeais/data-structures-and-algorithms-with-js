import { StackArray } from "./stack-array.js";

export function decimalToBinary(inputNumber) {
  const remStack = new StackArray();

  let number = inputNumber;
  while (number > 0) {
    const rem = Math.floor(number % 2);
    number = Math.floor(number / 2);
    remStack.push(rem);
  }

    let binaryString = "";
    while (!remStack.isEmpty()) {
      binaryString += remStack.pop().toString();
    }

    return binaryString;
}

console.log(decimalToBinary(75)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(12)); 