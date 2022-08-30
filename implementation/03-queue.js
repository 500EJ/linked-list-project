const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    // Add node to end of queue (linked list)
    this.length++;
    const node = new SinglyLinkedNode(val);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return this.length;
    }
    this.tail.next = node;
    this.tail = node;
    return this.length;
    // Time Complexity: O(1)
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    if (!this.length) return null;
    this.length--;
    const deleted = this.head;
    if (!this.length) {
      this.head = null;
      this.tail = null;
      return deleted.value;
    }
    this.head = this.head.next;
    return deleted.value;
    // Time Complexity: O(1)
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode
};
