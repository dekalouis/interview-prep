array2 = [4, 6, 1, -3];
targetSum2 = 3;

function hashTableTwoNumberSum(array, targetSum) {
  // Write your code here.
  //HASHTABLE
  let table = {};

  for (let i = 0; i < array.length; i++) {
    let potentialSum = targetSum - array[i];
    // console.log(array[i], `--- target sum ---`, potentialSum)
    // console.log(table)
    if (potentialSum in table) {
      return [potentialSum, array[i]];
    } else {
      table[array[i]] = true;
    }
  }
  return [];
}
console.log(hashTableTwoNumberSum(array2, targetSum2));

array3 = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
targetSum3 = 163;
//expected is [210, -47]

function twoPointerTwoNumberSum(array, targetSum) {
  //TWO POINTERS APPROACH
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let potentialSum = array[left] + array[right];
    console.log(
      `left index is:${array[left]} right index is:${array[right]} potential sum is ${potentialSum}`
    );
    if (potentialSum === targetSum) {
      console.log(`match!`);
      return [array[left], array[right]];
    } else if (potentialSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
console.log(twoPointerTwoNumberSum(array3, targetSum3));
