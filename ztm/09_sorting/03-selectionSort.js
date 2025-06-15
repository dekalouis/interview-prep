const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
  const length = arr.length;
  // Outer loop: iterate over each index where we want to place the smallest remaining item
  for (let i = 0; i < length; i++) {
    //set the index as the minimum, assume the current position i holds the smallest value
    let min = i;
    let temp = arr[i];
    //start at i+1 so the next one
    // Inner loop: scan the rest of the array to find the true minimum
    for (let j = i + 1; j < arr.length; j++) {
      //If a smaller value is found, update the min index, update the minimum since the current num is lower than what we had
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // After the inner loop, min holds the index of the smallest value found
    // Swap the current item with the smallest found
    arr[i] = arr[min];
    arr[min] = temp;
  }
  console.log(arr);
}

selectionSort(nums);
