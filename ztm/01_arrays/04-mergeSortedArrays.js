// function mergeSortedArrays(array1, array2){
//     const mergedArray = [];
//     let array1Item = array1[0];
//     let array2Item = array2[0];
//     let i = 1;
//     let j = 1;

//     //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//     if(array1.length === 0) {
//       return array2;
//     }
//     if(array2.length === 0) {
//       return array1;
//     }

//     while (array1Item || array2Item){
//      if(array2Item === undefined || array1Item < array2Item){
//        mergedArray.push(array1Item);
//        array1Item = array1[i];
//        i++;
//      }
//      else {
//        mergedArray.push(array2Item);
//        array2Item = array2[j];
//        j++;
//      }
//     }
//     return mergedArray;
//   }

//   mergeSortedArrays([0,3,4,31], [3,4,6,30]);

//*=============================================
//! Time complexity is O(n+m) because the loop happens to both arrays once, where the insertion is O(1), while the space is also O(n+m) as the new array res will contain both items from arr1 and arr2
function mergeSortedArrMine(arr1, arr2) {
  //validation checks
  if (!arr1) {
    return arr2;
  }
  if (!arr2) {
    return arr1;
  }
  //store results
  const res = [];

  //we note down the FIRST element of each array and initiate indexes for the elements after that
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  //here we do a check, where as long as there are arrItems, we will continue the loop, where we compare each element from both arrays and add the smaller element to the res
  while (arr1Item || arr2Item) {
    //this if check, we see if arr2 is exhausted, then we take the arr1Item. Basically we take the arr1Item if it is smaller than arr2 OR there are no more arr2Items
    if (arr2Item === undefined || arr1Item < arr2Item) {
      res.push(arr1Item);
      //add to the pointer index, starting from the value initiated above
      arr1Item = arr1[i++];
    } else {
      res.push(arr2Item);
      arr2Item = arr2[j++];
    }
  }

  return res;
}

console.log(mergeSortedArrMine([0, 3, 4, 31], [3, 4, 6, 30]));

//? better version?=====
function mergeBetter(arr1, arr2) {
  //here we do the same
  const res = [];
  let i = 0;
  let j = 0;

  //we do a while loop, where as long as the index is less than the length, it will keep comparing the items of each array to one another, but will end AS LONG as one of them is exhausted
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  //therefore, we need to make 2 other while loops to ensure that the remaining items of EACH array is also pushed in one array is longer than the other
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  //nonetheless the timespace complexity remains the same O(m+n) as we are iterating through each array ONCE, since the index exists, so regardless of the while loops, it is interated once based on the last value of the index. The space also is the same.

  return res;
}

console.log(mergeBetter([0, 3, 4, 31], [3, 4, 6, 30]));
