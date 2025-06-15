class Stack {
  constructor() {
    this.stack = new Array();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
    return this;
  }

  pop() {
    this.stack.pop();
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("google2"));
console.log(myStack.push("google3"));
myStack.pop();
console.log(myStack.peek());
