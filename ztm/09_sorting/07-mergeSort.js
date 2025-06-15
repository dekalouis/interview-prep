const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  //split array into right and left
  const mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid); // from index 0 up to mid (not including mid)
  let right = array.slice(mid); // from mid to end(inc mid)
  console.log(`left->`, left, `right->`, right);

  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  //loop as long as the index is less than the length of left/right
  while (leftIndex < left.length && rightIndex < right.length) {
    //check if the index value of the left is less than the right, push to new arr
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(left, `---`, right);
  //combine everything together
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);

//divide array into 2 subsets, and divide them again until only 1 item
//O(nlogn) because finding the index is O(1) but sorting the items will be O(n)
//although like bubble sort we have to go through the list 1 by 1, we dont have to compare everything with everything, just the local lists with each other
//space complexity is O(n) because need to store separate array
