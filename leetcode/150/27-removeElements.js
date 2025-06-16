// Time Complexity: O(n)
// Space Complexity: O(n) — uses extra array

var removeElement = function (nums, val) {
  let filtered = nums.filter((num) => num !== val); // create new array without val

  for (let i = 0; i < filtered.length; i++) {
    nums[i] = filtered[i]; // copy back into original array
  }

  return filtered.length;
};

// Explanation:
// - Filters out all elements equal to `val`.
// - Then writes the filtered results back to the start of `nums`.
// - Violates "in-place" constraint since it uses extra memory (not optimal).

// Time Complexity: O(n)
// Space Complexity: O(1)

var removeElement2 = function (nums, val) {
  let k = 0; // index to place non-val elements

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // copy non-val element forward
      k++;
    }
  }

  return k;
};

// Explanation:
// - Uses two pointers: `i` to scan, `k` to write valid (non-val) elements.
// - Overwrites values in-place, maintaining relative order.
// - Efficient and meets in-place requirement.

// Time Complexity: O(n)
// Space Complexity: O(1)

var removeElement3 = function (nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1]; // replace with last element
      n--; // shrink array size
    } else {
      i++;
    }
  }

  return n;
};

// Explanation:
// - Order doesn't matter, so we can swap unwanted elements with the last.
// - Decreases array size on the fly by shortening `n`.
// - Most efficient when order is irrelevant — fewer writes in practice.
