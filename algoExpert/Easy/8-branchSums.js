class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  // Recursive DFS, make a sums array,
  //make calculatebranchsums with node, running and sums, (run in main with root, 0, sums)
  //in the function set a newrunningsum which is the runningsum plus the node's value
  //check if there are NO nodes on the left AND right,
  //if it's true, push the newrunsum to the sums arr, and return nothing.
  //recursively do the calculate funct, with the left and right with newSum and sums
  let sums = [];
  dfs(root, 0, sums);
  return sums;
}

function dfs(node, runSum, sums) {
  if (!node) return;
  let newRunSum = runSum + node.value;

  if (!node.left && !node.right) {
    sums.push(newRunSun);
    return;
  }

  dfs(node.left, newRunSum, sums);
  dfs(node.right, newRunSum, sums);
}

//simpler method
function branchSums2(root, sum = 0, sums = []) {
  let currentSum = sum + root.value;

  if (!root.left && !root.right) {
    sums.push(currentSum);
  }

  if (root.left) {
    branchSums2(root.left, currentSum, sums);
  }
  if (root.right) {
    branchSums2(root.right, currentSum, sums);
  }
  return sums;
}
