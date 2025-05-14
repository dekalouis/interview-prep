const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(arr) {
//   // Outer loop runs for each element in the array
//   for (let i = 0; i < arr.length; i++) {
//     //the inner loop compares the elements next to each other
//     for (let j = 0; j < arr.length; j++) {
//       //if the current is greater than the next, swap it
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }

// bubbleSort(numbers);

//? better version so time complexity not so bad
function bubbleSort(arr) {
  let length = arr.length;

  // Outer loop tracks each pass through the array
  for (let i = 0; i < length; i++) {
    let swapped = false;

    // Inner loop goes only up to the last unsorted element
    // With each outer loop, the largest item gets "bubbled" to the end
    for (let j = 0; j < length - 1 - i; j++) {
      /*We compare arr[j] with arr[j + 1], so the last valid j is length - 2.
That’s why we loop until j < length - 1, not j < length.
After each outer loop (i), the last i elements are already sorted and don't need to be checked again.
So we reduce the range of the inner loop by i to avoid redundant comparisons.
*/
      console.log(`  Comparing ${arr[j]} and ${arr[j + 1]}`);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // If no swaps happened during this pass, array is sorted
    if (!swapped) {
      console.log("No swaps in this pass — array is sorted early.");
      break;
    }
  }
  console.log(arr);
}

bubbleSort(numbers);
