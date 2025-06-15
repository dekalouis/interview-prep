// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     const finalArray = [];
//     const objIndices = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (objIndices.hasOwnProperty(target - nums[i])) {
//             finalArray.push(objIndices[target - nums[i]]);
//             finalArray.push(i);
//         } else {
//             objIndices[nums[i]] = i;
//         }
//     }

//     return finalArray;
// };

// console.log(twoSum([3, 2, 4], 6));

//!worstSolution brute force O(n^2)
function twoSumBrute(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    //J starts from the next index
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(arr[i], arr[j]);
        res.push(i, j);
        return res;
      }
    }
  }
  return res;
}

// console.log(twoSumBrute([2, 7, 11, 15], 9)); //[0,1]
// console.log(twoSumBrute([3, 2, 4], 6)); //[1,2]
// console.log(twoSumBrute([3, 3], 6)); // [0,1]

function twoSumPointer(arr, target) {
  let comp = new Map(); //MAP TO STORE KEY with VALUE -> INDEX

  for (let i = 0; i < arr.length; i++) {
    // console.log(comp);
    if (comp.has(arr[i])) {
      return [comp.get(arr[i]), i];
    } else {
      comp.set(target - arr[i], i);
    }
  }
  return -1;
}

console.log(twoSumPointer([2, 7, 11, 15], 9));
console.log(twoSumPointer([3, 2, 4], 6));
console.log(twoSumPointer([3, 3], 6));
