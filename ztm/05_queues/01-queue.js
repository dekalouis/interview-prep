class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    //just show the first on the list
    return this.first;
  }

  enqueue(value) {
    //create new node
    const newNode = new Node(value);
    //if no length, make both first and last the same
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      //otherwise, set the next node of the last node to BE the newly created node
      this.last.next = newNode;
      //and then set the newnode to be the lastnode
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    //if no first, set to null
    if (!this.first) {
      return null;
    }
    //if the first and last are the same, set the last to be null
    if (this.first === this.last) {
      this.last = null;
    }
    //save the pointers of everyone after the first node
    const holdingPointer = this.first.next;
    //set the firstnode to be that pointer instead
    this.first = holdingPointer;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();

// console.log(myQueue.peek());
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.dir(myQueue.enqueue("Pavel"), { depth: null });
console.log(myQueue.peek());
console.dir(myQueue.dequeue(), { depth: null });
console.dir(myQueue.dequeue(), { depth: null });
console.dir(myQueue.dequeue(), { depth: null });
