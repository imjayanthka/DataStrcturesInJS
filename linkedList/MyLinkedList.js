// prev -> value -> next

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const node = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
  }

  addToTail(value) {
    const node = new Node(value, null, this.tail);

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  }

  removeHead() {
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return value;
  }

  removeTail() {
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return value;
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return value;
      current = current.next;
    }
    return null;
  }

  indexOf(value) {
    const indexes = [];
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) indexes.push(index);
      current = current.next;
      index++;
    }
    return indexes;
  }

  //   Assuming it's zero index
  insertAt(value, index) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentNode) {
      const node = new Node(value, currentNode.next, currentNode);
      currentNode.next = node;
    } else {
      this.addToTail(value);
    }
  }

  print() {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
};
