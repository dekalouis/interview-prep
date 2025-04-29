// linked list: apples --> grapes --> pears
// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

const obj1 = { a: true };
const obj2 = obj1;

obj1.a = "booya";
delete obj1; // because JS is garbage collected, this is deleted

// console.log('1', obj1)
// console.log("2", obj2); // will still output booya because there is still a pointer

//! 10-->5-->16
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    //! DRY DO NOT REPEAT YOURSELF
    // const newNode = {
    // value: value,
    // next: null,
    // };
    let newNode = new Node(value);
    //*better

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // const newNode = {
    //   value: value,
    //   next: null,
    // };
    let newNode = new Node(value);

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

  //! needed to loop until the selected index
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    //!create new node first
    let newNode = new Node(value);

    //!count the leader node (*)->*
    let leader = this.traverseToIndex(index - 1);
    //!SAVE THE POINTERS OF THE LEADER TO USE AGAIN
    let holdingPointer = leader.next;

    //!replace the next of the leader to the created newNode
    //(*) -/-> *
    //  \*---/^
    leader.next = newNode;

    //!then set the null from the newNode to the holdingpointer earlier
    newNode.next = holdingPointer;

    this.length++;

    return this.printList();
  }

  remove(index) {
    //if index is 0 remove head
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    //if index too big, remove tail
    if (index >= this.length) {
      //go to second last node
      let leader = this.traverseToIndex(this.length - 2);
      leader.next = null;
      this.length--;
      return;
    }
    //!find the leader, the index added -1, or the node BEFORE the index we want,
    let leader = this.traverseToIndex(index - 1);
    //! THEN WE MENTION THAT THAT NODE IS WHAT WE DONT WANT
    let unwantedNode = leader.next;
    // console.dir(leader, { depth: null });
    //! and we simply decide that the node before the onewe want to delete will now point to the NEXT node
    leader.next = unwantedNode.next;
    this.length--;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);
// myLinkedList.prepend(2);
myLinkedList.append(5);
myLinkedList.append(16);
// myLinkedList.append(22);
console.log(myLinkedList.printList());

myLinkedList.insert(2, 99); // TRY THIS ONE
myLinkedList.insert(20, 88); // TRY THIS ONE
// console.dir(myLinkedList, { depth: null });
console.log(myLinkedList.printList());

myLinkedList.remove(1);
myLinkedList.remove(25);
console.log(myLinkedList.printList());
