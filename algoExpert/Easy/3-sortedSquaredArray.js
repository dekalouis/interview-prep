//two pointers
function sortedSquaredArray2(array) {
  // Write your code here.
  // TWO POINTER METHOD, (need an index[third pointer for new arr] and while loop)
  let newArr = new Array(array.length);
  let left = 0;
  let right = array.length - 1;
  let idx = array.length - 1;

  while (left < end) {
    let leftSquare = array[left] * array[left];
    let rightSquare = array[right] * array[right];

    if (leftSquare > rightSquare) {
      newArr[idx] = leftSquare;
      idx--;
      left++;
    } else {
      newArr[idx] = rightSquare;
      idx--;
      right--;
    }
  }
}

//brute force
function sortedSquaredArray(array) {
  // Write your code here.
  // BRUTE FORCE APPROACH,
}
