//*RECURSIVE
function findClosestValueInBstRecursive(tree, target) {
  // Write your code here.
  //iterate through the tree, start closest node at inf or root
  //time complexity average O(logn) but can be O(n) if tree is a line! space is also O(logn)
  return findClosestValueInBstHelperRecursive(tree, target, Infinity);
}

function findClosestValueInBstHelperRecursive(tree, target, closest) {
  if (!tree) {
    return closest;
  }
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelperRecursive(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelperRecursive(tree.right, target, closest);
  } else {
    return closest;
  }
}

//* ITERATIVE
function findClosestValueInBstIterative(tree, target) {
  // Write your code here.
  //iterate through the tree, start closest node at inf or root
  //time complexity average O(logn) but can be O(n) if tree is a line! space is also O(logn)
  return findClosestValueInBstHelperIterative(tree, target, Infinity);
}

function findClosestValueInBstHelperIterative(tree, target, closest) {
  let currentNode = tree;
  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

//!+====================================================================
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// HELPER FUNCTION TO BUILD TREE
function buildTree(treeObj) {
  const nodeMap = {};

  for (const node of treeObj.nodes) {
    nodeMap[node.id] = new BST(node.value);
  }

  for (const node of treeObj.nodes) {
    if (node.left) nodeMap[node.id].left = nodeMap[node.left];
    if (node.right) nodeMap[node.id].right = nodeMap[node.right];
  }

  return nodeMap[treeObj.root];
}

// Your tree object
let treeData = {
  nodes: [
    { id: "10", left: "5", right: "15", value: 10 },
    { id: "15", left: "13", right: "22", value: 15 },
    { id: "22", left: null, right: null, value: 22 },
    { id: "13", left: null, right: "14", value: 13 },
    { id: "14", left: null, right: null, value: 14 },
    { id: "5", left: "2", right: "5-2", value: 5 },
    { id: "5-2", left: null, right: null, value: 5 },
    { id: "2", left: "1", right: null, value: 2 },
    { id: "1", left: null, right: null, value: 1 },
  ],
  root: "10",
};

let target = 12;
let bstRoot = buildTree(treeData);

console.log(findClosestValueInBstRecursive(bstRoot, target)); // ✅ Should print 13
console.log(findClosestValueInBstIterative(bstRoot, target)); // ✅ Should print 13
