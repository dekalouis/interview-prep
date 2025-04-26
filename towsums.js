let input = [1, 2, 3, 9]; //sum 8
let input2 = [1, 2, 4, 4]; //sum 8

function twoSumBrute(arr, sum) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    //big O(n^2) because 2 loops, not good
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        res.push(arr[i], arr[j]);
        return res;
      }
    }
  }
  return -1;
}

console.log(twoSumBrute(input, 8));
console.log(twoSumBrute(input2, 8));
