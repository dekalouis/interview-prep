function threeNumberSumBrute(arr, targetSum) {
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

array = [12, 3, 1, 2, -6, 5, -8, 6];
targetSum = 0;
// [
//   [-8, 2, 6],
//   [-8, 3, 5],
//   [-6, 1, 5]
// ]

console.log(threeNumberSumBrute(array, targetSum));

function threeNumberSumPointers(arr, targetSum) {
  // Write your code here.
  //Two-Pointer after Sorting (Sorted Array + Two Pointer Sweep)
  //sort, do for loop, add pointers after current index,
  //add while loop as long as pointers dont overlap, make them get closer if
  //the targetsum is achieved
  arr.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let potentialSum = arr[i] + arr[left] + arr[right];

      if (potentialSum === targetSum) {
        res.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (potentialSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

array = [8, 10, -2, 49, 14];
targetSum = 57;

// [
//   [-2, 10, 49]
// ]
