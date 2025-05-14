class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      // console.log('yes')
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    // //note down the current node as the head
    // let currentNode = this.head;
    // //point an empty previous
    // let prev = null;
    // //empty var for the next
    // let next;

    // //? WHEN CURRENT is still not null (means we are not yet at the end)
    // while (currentNode !== null) {
    //   //?NEXT should be filled with currentNode's next
    //   next = currentNode.next;
    //   //? then the currentnode's pointer (next) is reversed to be the prev value
    //   currentNode.next = prev;
    //   //? then the previous value is replaced with the currentNode
    //   prev = currentNode;
    //   //? finally, the currentNode is replaced with the value saved above(the other values from the original currentNode)
    //   currentNode = next;
    // }
    // //* finally, we set the head to be the prev as this is what points originally to the last node
    // this.head = prev;

    //! EASIER??
    //reference first item // first (*)-*-*-*
    let first = this.head;
    //replaces the tail with the current head
    this.tail = this.head;
    //note down the second item as well
    let second = first.next; // the second *-(*)-*-*
    //as long as we have a second value (not null) we loop
    while (second) {
      const temp = second.next; //third node is referenced *-*-(*)-*
      //make it so the second node's NEXT is the first node (not third)
      second.next = first;
      // then first (node we are checking moves to the following node)
      first = second;
      //we also push back the second (node after the node we are checking) to be the temp/third node
      second = temp;
    }
    //finally we set the head's next to null so it becomes the last ndoe
    this.head.next = null;
    //replace the head with the "first" which after the loop is the last node we are checking (since second doesnt exist)
    this.head = first;

    return this;
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
// console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2, 99));
// console.log(myLinkedList.insert(20, 88));
// console.log(myLinkedList.remove(2));

console.dir(myLinkedList.reverse(), { depth: null });

console.log(myLinkedList.printList());
