// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Add node of val to head of linked list
    const node = new SinglyLinkedNode(val);
    this.length++;
    if (!this.head) {
      this.head = node;
      return this;
    }
    node.next = this.head;
    this.head = node;
    return this;
    // Time Complexity: O(1)
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Time Complexity: O(n)

    // Add node of val to tail of linked list
    const newNode = new SinglyLinkedNode(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;

    return this;
  }

  removeFromHead() {
    // Remove node at head
    if (!this.head) return;
    this.length--;
    const deleted = this.head;
    this.head = this.head.next;
    return deleted;
    // Time Complexity: O(1)
  }

  removeFromTail() {
    // Remove node at tail
    if (!this.head) return;
    this.length--;
    let deleted = this.head;
    if (this.length === 0) {
      this.head = null;
      return deleted;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    deleted = current.next;
    current.next = null;
    return deleted;
    // Time Complexity: O(n)
  }

  peekAtHead() {
    // Return value of head node
    return this.head ? this.head.value : undefined;
    // Time Complexity: O(1)
  }

  print() {
    // Print out the linked list
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
    // Time Complexity: O(n)
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode
};
