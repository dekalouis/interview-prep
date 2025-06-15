// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.right = null;
//     this.left = null;
//   }
// }

/* for binary trees, to calculate the amount of nodes on each level we can just power it to the level, eg:
level 0: 2^0 = 1
level 1: 2^1 = 2
level 2: 2^2 = 4
level 3: 2^3 = 8

to calculate the number of nodes = 2^h -1
log of nodes = height(steps)

log 100 = 2
10^2 = 100
*/

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// even though there is a loop, it is O(logn) because we are only traversing with divide and conquer, which takes up half of the time
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      //! we dont know how long well traverse this node hence the true
      while (true) {
        //first we check the value of newNode, less or more?
        //if less left if more right
        if (newNode.value < currentNode.value) {
          //inside we check again is the node EMPTY? if yes fill with new node,
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
            //otherwise replace the currentNode with the node on it's left to redo the LOOP
          } else {
            currentNode = currentNode.left;
          }
          // } else if (newNode.value > currentNode.value) {
        } else {
          //simple else is sufficient as all other cases, greater or equal should just go to the right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }
  lookup(value) {
    //if no root just false
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    //KEEP looping as long as currentNode has VALUE
    while (currentNode) {
      //if less, then currentnode is replaced by its left value
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        //same goes to the right
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
        //if it is a match, we return it
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    //if all else fails, the loop finds nothing, return false
    return false;
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //we have a match!
        //?option 1, no right child

        if (currentNode.right === null) {
          //!check first if the parentNode is null or not (is this the root node or not), so that the left node becomes the new root
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if the parent > current value, make current left child the child of the parentnode
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
              //if parent is < than current value, make left child a right child of the parent
            } else if (currentNode.value > parentNode.left) {
              parentNode.right = currentNode.left;
            }
          }
        }
        //?option 2, right child, no left child
        else if (currentNode.right.left === null) {
          //! same as the above, if we're dealing with the root node, replace the root node with the leftNode this time (smaller value)
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            //if the parent is > than current, we make the right child of the leftnode as the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }
            //if the parent < current, we make the right child the actual right child of the parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }
        //?option 3 right child that has left child
        else {
          //we first find the RIGHT child's leftmost child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(4));
console.log(tree.lookup(20));
// console.log(tree.lookup(27));
console.log(tree.remove(20)); //true
console.log(JSON.stringify(traverse(tree.root)));
//    9
// 4    20
//1 6  15 170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
