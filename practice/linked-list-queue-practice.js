// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToTail(val) {
    this.length++;
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity
    // O(n)
    // let current = this.head;
    // let count = 0;
    // while (current) {
    //   count++;
    //   current = current.next;
    // }
    // return count;

    // O(1)
    return this.length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    let current = this.head;
    let sum = 0;
    while (current) {
      sum += current.value;
      current = current.next;
    }
    return sum;
    // Time Complexity: O(n)
  }

  averageValue() {
    // Returns the average value of all the nodes
    let current = this.head;
    let count = 0;
    let sum = 0;
    while (current) {
      count++;
      sum += current.value;
      current = current.next;
    }
    return sum / count;
    // Time Complexity: O(n)
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    let current = this.head;
    let count = 0;
    while (current && count < n) {
      current = current.next;
      count++;
    }
    return count === n ? current : null;
    // Time Complexity: O(1)
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    const mid =
      Math.floor(this.length / 2) === this.length / 2
        ? this.length / 2 - 1
        : Math.floor(this.length / 2);
    let current = this.head;
    for (let i = 0; i < mid; i++) {
      current = current.next;
    }
    return current;
    // Time Complexity: O(n)
  }

  reverse() {
    // Returns a new reversed version of the linked list
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    const list = new SinglyLinkedList();
    for (let i = arr.length - 1; i >= 0; i--) {
      list.addToTail(arr[i]);
    }
    return list;
    // Time Complexity: O(n)
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    for (let i = 0; i < this.length; i++) {
      let final = last.next;
      last.next = new SinglyLinkedNode(this.head.value);
      last.next.next = final;
      this.head = this.head.next;
    }
    return this.head;
    // Time Complexity: O(n)
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    this.length++;
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    const mid =
      Math.floor(this.length / 2) === this.length / 2
        ? this.length / 2 - 1
        : Math.floor(this.length / 2);
    let current = this.head;
    for (let i = 0; i < mid; i++) {
      current = current.next;
    }
    return current;
    // Time Complexity: O(n)
  }

  reverse() {
    // Returns a new reversed version of the linked list
    let current = this.tail;
    let ll = new DoublyLinkedList();
    while (current) {
      ll.addToTail(current.value);
      current = current.prev;
    }
    return ll;
    // Time Complexity: O(n)
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    let last = this.tail;
    for (let i = 0; i < this.length; i++) {
      let final = last.next;
      last.next = new SinglyLinkedNode(this.head.value);
      last.next.next = final;
      this.head = this.head.next;
    }
    return this.head;
    // Time Complexity: O(n)
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList
};
