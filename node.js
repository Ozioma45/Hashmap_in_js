export class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// LinkedList.js
import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  remove(value) {
    if (this.headNode === null) return null;

    if (this.headNode.value === value) {
      this.headNode = this.headNode.nextNode;
      return true;
    }

    let current = this.headNode;
    while (current.nextNode !== null) {
      if (current.nextNode.value === value) {
        current.nextNode = current.nextNode.nextNode;
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  toArray() {
    const elements = [];
    let current = this.headNode;
    while (current !== null) {
      elements.push(current.value);
      current = current.nextNode;
    }
    return elements;
  }
}
