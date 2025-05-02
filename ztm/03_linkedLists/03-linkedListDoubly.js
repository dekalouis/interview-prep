class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
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

    //initially, this.tail points to the last node, then this one sets the next of that tailNode to be the newnode
    this.tail.next = newNode;
    //??ADDING THE PREVIOUS KEY OF THE NEWNODE TO THE LAST TAIL
    newNode.prev = this.tail;
    //then this updates the tail reference to be the newnode, making the newnode the last node
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
    //??setting the inital head's prev to be the newNode
    this.head.prev = newNode;

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

    //!count the leader node (*)->* the node BEFORE where we want to add the newnode
    let leader = this.traverseToIndex(index - 1);
    //!SAVE THE FOLLOWERS OF THE LEADER TO USE AGAIN
    let follower = leader.next;

    //!replace the next of the leader to the created newNode
    //(*) -/-> *
    //  \*---/^
    leader.next = newNode; //the next value of the leader is filled with the newNode
    newNode.prev = leader; //??the newNode's PREV value is the leader

    //!then set the next null from the newNode to the follower earlier
    newNode.next = follower;
    //??then we set the PREV value of the follower to be the newNode as well
    follower.prev = newNode;

    this.length++;

    return this.printList();
  }

  remove(index) {
    //if index is 0 remove head
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null; // Update prev pointer of new head
      }
      this.length--;
      // If we removed the only node, update tail
      if (this.length === 0) {
        this.tail = null;
      }
      return;
    }
    //if index too big, remove tail
    if (index >= this.length) {
      //go to second last node
      let leader = this.traverseToIndex(this.length - 2);
      leader.next = null;
      this.tail = leader; // Update tail reference
      this.length--;

      return;
    }
    //!find the leader, the index added -1, or the node BEFORE the index we want,
    let leader = this.traverseToIndex(index - 1);
    //! THEN WE MENTION THAT THAT NODE IS WHAT WE DONT WANT
    let unwantedNode = leader.next;
    // console.dir(leader, { depth: null });
    //! and we simply decide that the node before the one we want to delete will now point to the NEXT node
    //??name the followers, which are the unwantednode's next
    let follower = unwantedNode.next;
    leader.next = follower;
    //?? update the follower's prev pointers
    follower.prev = leader;

    this.length--;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(1);

console.dir(myLinkedList, { depth: null });
console.log(myLinkedList.printList());

//
