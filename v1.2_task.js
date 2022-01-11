class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      console.error("Head is null");
      return;
    }
    const nodeTodelete = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = nodeTodelete.prev;
      this.tail.next = null;
      nodeTodelete.prev = null;
    }
    this.length--;
    return nodeTodelete;
  }

  shift() {
    if (!this.head) {
      console.error("Head is null");
      return;
    }
    const nodeToDelete = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToDelete.next;
      this.head.prev = null;
      nodeToDelete.next = null;
    }
    this.length--;
    return nodeToDelete;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  count() {
    return this.length;
  }

  delete(index) {
    if (!Number.isInteger(index) || index < 0 || index > this.length) {
      console.error(`Invalid index`);
      return this;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;

      this.length--;
      return this;
    }

    if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;

      this.length--;
      return this;
    }

    let prevNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    let nodeToDelete = prevNode.next;
    let nextNode = nodeToDelete.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;
    return this;
  }
}

const list = new List();

list.push(64);
list.push(9);
list.push(20);
list.push(30);

list.delete(0);
list.pop();

console.log("Head value:", list.head.value);
console.log("Tail value:", list.tail.value);
console.log("Count:", list.count());

console.log("Head next value:", list.head.next.value);
console.log("Tail prev value:", list.tail.prev.value);
console.log(list);
