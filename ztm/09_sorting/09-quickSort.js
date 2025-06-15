const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  if (left < right) {
    //find the partition index
    let pivotIndex = partition(array, left, right);
    //recursively sort the elements before partition
    quickSort(array, left, pivotIndex - 1);
    //recursively sort the elements after partition
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

function partition(array, left, right) {
  //chose the rightmost as the pivot
  let pivot = array[right];

  //index of the smaller element - indicates the right position of pivot found so far
  let i = left - 1;

  //loop through the array
  for (let j = left; j <= right - 1; j++) {
    //if the current element is smaller than or equal to pivot
    if (array[j] <= pivot) {
      i += 1;
      swap(array, i, j);
    }
  }
  //place the pivot in the correct position
  swap(array, i + 1, right);
  //return the position of the pivot
  //   console.log(`After partition (pivot=${pivot}):`, [...array]);
  return i + 1;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

let ans = quickSort(numbers, 0, numbers.length - 1);
console.log(ans);
