// Time Complexity: O(n)
// Space Complexity: O(n) — uses extra space (not allowed per problem)

var removeDuplicates = function (nums) {
  let countMap = new Map(); // stores count of each number
  let result = []; // stores final filtered result

  for (let num of nums) {
    let count = countMap.get(num) || 0;
    if (count < 2) {
      result.push(num); // only add if it's < 2 occurrences
      countMap.set(num, count + 1);
    }
  }

  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i]; // copy result back to original array
  }

  return result.length;
};

// Explanation:
// - This solution uses a Map to count how many times each number has appeared.
// - It stores only the first two occurrences of each unique number.
// - Finally, it copies the filtered result back to the input array.
// - Not valid for this problem since it uses extra space, but it's easy to understand.

// Time Complexity: O(n)
// Space Complexity: O(1)

var removeDuplicates2 = function (nums) {
  if (nums.length <= 2) return nums.length; // arrays of size ≤2 are already valid

  let writeIndex = 2; // start writing from index 2

  for (let readIndex = 2; readIndex < nums.length; readIndex++) {
    // Check if the current number is greater than the number two places before.
    // This ensures we allow at most two duplicates.
    if (nums[readIndex] !== nums[writeIndex - 2]) {
      nums[writeIndex] = nums[readIndex]; // overwrite at writeIndex
      writeIndex++; // move write pointer
    }
  }

  return writeIndex;
};

// Explanation:
// - We know that the first two elements can always stay (since two duplicates are allowed).
// - From the third element onward, we check if it’s equal to the element two places before it.
// - If it’s not equal, it means it’s safe to keep (we haven’t seen it more than twice).
// - This technique uses two pointers:
//   - `readIndex` goes through the whole array.
//   - `writeIndex` keeps track of where to place valid numbers.

// Time Complexity: O(n)
// Space Complexity: O(1)

var removeDuplicates3 = function (nums) {
  let k = 0; // counts how many valid elements we've written

  for (let i = 0; i < nums.length; i++) {
    // Keep the number if:
    // - We’ve written fewer than 2 elements, OR
    // - Current number is greater than the number two spots before (to allow at most two)
    if (k < 2 || nums[i] > nums[k - 2]) {
      nums[k] = nums[i]; // write to the current valid index
      k++; // increment the count of valid elements
    }
  }

  return k;
};

// Explanation:
// - This version avoids multiple pointers by using `k` as a combined write index and validator.
// - The key condition (`nums[i] > nums[k - 2]`) ensures we don’t allow more than 2 of the same number.
// - Elegant, beginner-readable, and minimal condition logic.
// - Fully in-place and meets problem constraints.
