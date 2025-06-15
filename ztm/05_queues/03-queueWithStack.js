class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueStack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.first === this.last) {
      this.last = null;
    }
    if (!this.first) {
      return null;
    }
    const toDelete = this.first.value;
    const holdingPointer = this.first.next;
    this.first = holdingPointer;
    this.length--;
    return toDelete;
  }

  peek() {
    return this.first.value;
  }

  empty() {
    if (!this.first && !this.last) {
      return true;
    } else {
      return false;
    }
  }
}

const myQueue = new QueueStack();

console.log(myQueue.push(1));
console.log(myQueue.push(2));
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty());
