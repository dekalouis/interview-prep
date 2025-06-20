function threeNumberSum(arr, targetSum) {
  // Write your code here.
  //Brute Force Approach (Triple Nested Loop)
  // dont forget about the length!, they shouldnt overlap
  let res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === targetSum) {
          res.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return res;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
