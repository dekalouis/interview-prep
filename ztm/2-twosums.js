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

// console.log(twoSumBrute(input, 8));
// console.log(twoSumBrute(input2, 8));

function twoSumPointers(arr, sum) {
  let low = 0;
  let high = arr.length - 1;
  let res = [];

  while (low < high) {
    // console.log(`arr low is ${arr[low]} and arr high is ${arr[high]}`);
    if (arr[low] + arr[high] === sum) {
      res.push(arr[low], arr[high]);
      return res;
    } else {
      low++;
    }
  }
  return -1;
}

// console.log(twoSumPointers(input, 8));
// console.log(twoSumPointers(input2, 8));

function hasPairWithSum(arr, sum) {
  let compliment = new Set();

  for (let i = 0; i < arr.length; i++) {
    // If we've seen the complement before, return both numbers
    if (compliment.has(arr[i])) {
      return [arr[i], sum - [arr[i]]]; //true
    }
    compliment.add(sum - arr[i]);
  }
  return -1; //false
}

console.log(hasPairWithSum([6, 4, 3, 2, 1, 7], 9));
