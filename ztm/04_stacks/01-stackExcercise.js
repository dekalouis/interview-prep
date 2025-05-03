class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    //set up the new node
    let newNode = new Node(value);

    //if length is 0, both top and bottom are newNode
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      //otherwise, put the topmost node as a pointer
      let holdingPointer = this.top;
      //ensure the NEXT node of the newNode is the pointer
      newNode.next = holdingPointer;
      //then replace topnode with newNode
      this.top = newNode;
    }

    //!WORKS BUT IS WRONG
    // newNode.next = this.top;
    // this.top = newNode;
    // if (this.top.next === null) {
    //   this.bottom = this.top;
    // }
    // this.length++;
    // this.top.next = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      //if nomore top, return null
      return null;
    }
    if (this.top === this.bottom) {
      //if already on the last stack, remove bottom node
      this.bottom = null;
    }

    //?optional, can set up a holdingpointer to the last top node which will be garbagecollected
    // const holdingPointer = this.top
    //* otherwise, replace topNode with the next node
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();

myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
// myStack.push("HighP");
console.dir(myStack.peek(), { depth: null });
myStack.pop();
myStack.pop();
// myStack.pop();

console.dir(myStack.peek(), { depth: null });
