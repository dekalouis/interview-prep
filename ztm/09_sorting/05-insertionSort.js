const nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const nums = [6, 5, 3, 1, 8, 7, 2, 4];

function insertionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] < arr[0]) {
      //if number is smaller than the first item on the array, move that number to the beginning of the list
      /* arr.splice(i, 1) removes the current element at index i.
    unshift(...) inserts it at the beginning.
    This prevents unnecessary comparisons in the inner loop. */
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      //otherwise find where it should go

      for (let j = 1; j < i; j++) {
        //move it to the right spot
        /* 
        The for loop checks where the current element should go among the already sorted items.
        arr[i] < arr[j]: we’ve found the right spot.
        splice(i,1) removes the element at index i.
        splice(j,0,...) inserts it before index j.
        The loop breaks once it inserts — ensuring the element is only moved once. */
        if (arr[i] < arr[j]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]); // Remove arr[i] and insert at j
          break;
        }
      }
    }
  }
  console.log(arr);
}

insertionSort(nums);

/*
we loop, outer loop goes thru array, 
so 6, 5, 3, 1, 8, 7, 2, 4

second loop, we compare 
adjacent items, since 5 < 6, move it to the beginning
then we compare 3 with the 6, and since 3 is smaller, move it to the beginning
do the same for one
then 8 stays
then 7, is greater than 6 so move it to the right of it






*/
