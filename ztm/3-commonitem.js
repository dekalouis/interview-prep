//given 2 arrays, create a function that lets a user know (true false) whether the two arrays contain any common items
//example:
//const array1 = ['a','b','c','x']
//const array2 = ['z','y','i']
//return false
//const array1 = ['a','b','c','x']
//const array2 = ['z','y','x']
//return true

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

//this will have a time complexity of O(n*m )because loop is nested within each other basically O(n^2)
//the space is O(1) because no additional variables made, only using the original arrays
function hasCommonItemBrute(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasCommonItemBrute(array1, array2));
console.log(hasCommonItemBrute(array3, array4));

//non brute force becomes O(m+n) because looping 2 different inputs
//this is O(n) because there is a new variable made
function hasCommonItemPointer(arr1, arr2) {
  let shorter = new Set(arr2);
  for (let i = 0; i < arr1.length; i++) {
    if (shorter.has(arr1[i])) {
      return true;
    }
  }
  return false;

  //! without the Set
  // let shorter = {};
  // for (let i = 0; i < arr2.length; i++) {
  //   shorter[arr2[i]] = true;
  // }
  // console.log(shorter);
  // for (let i = 0; i < arr1.length; i++) {
  //   if (shorter[arr1[i]]) {
  //     return true;
  //   }
  // }
  // return false;
}

console.log(hasCommonItemPointer(array1, array2));
console.log(hasCommonItemPointer(array3, array4));

//still O(m+n) but is super short
//this is O(n) because there is a new variable made same
function hasCommonShort(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(hasCommonShort(array1, array2));
console.log(hasCommonShort(array3, array4));
