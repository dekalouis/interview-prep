let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

//ITERATIVE GREEDY METHOD, iterates the main array once with a for loop
function isValidSubsequence(array, sequence) {
  let sqxIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (sqxIndex === sequence.length) {
      break;
    }
    console.log(
      `comparing main array value: ${array[i]} with sequence array value ${sequence[sqxIndex]}`
    );
    if (array[i] === sequence[sqxIndex]) {
      console.log(
        `found match in array ${array[i]} and sequence ${sequence[sqxIndex]}`
      );
      sqxIndex++;
    }
  }

  return sqxIndex === sequence.length;
}

console.log(isValidSubsequence(array, sequence)); // true

//TWO POINTERS METHOD
function isValidSubsequence2(arr, sequence) {
  // Write your code here.
  //TWO POINTERS while loop,
  //iterate through the main index, check the sequence index while youre at it
  let arrIdx = 0;
  let sqxIdx = 0;

  while (arrIdx < arr.length) {
    console.log(`comparing ${arr[arrIdx]} to ${sequence[sqxIdx]}`);
    if (sequence.length === sqxIdx) break;
    if (arr[arrIdx] === sequence[sqxIdx]) {
      console.log(`match! Adding sqxIdx`);
      sqxIdx++;
      console.log(
        `current sqxIdx: ${sqxIdx} and the length shuld be ${sequence.length}`
      );
    }

    arrIdx++;
  }

  return sqxIdx === sequence.length;
}
