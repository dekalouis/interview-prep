// Time Complexity: O(n)
// Space Complexity: O(n) — uses extra space for Set

var removeDuplicates = function (nums) {
  let unique = [...new Set(nums)]; // extract unique elements
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i]; // overwrite input array
  }
  return unique.length;
};

// Explanation:
// - Convert array to Set to get unique elements.
// - Copy them back to the start of `nums` to satisfy in-place requirement.
// - Returns the count of unique elements.
// - This violates the "in-place without extra space" constraint, but is commonly attempted.

// Time Complexity: O(n)
// Space Complexity: O(1)

var removeDuplicates2 = function (nums) {
  if (nums.length === 0) return 0;

  let i = 0; // slow pointer: marks the place for unique element

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++; // move forward for next unique spot
      nums[i] = nums[j]; // place the unique value
    }
  }

  return i + 1; // number of unique elements
};

// Explanation:
// - Use two pointers: `i` for the position of the last unique element,
//   `j` for scanning the array.
// - When a new unique element is found, increment `i` and copy it there.
// - `nums[0..i]` will contain the unique elements.

// Time Complexity: O(n)
// Space Complexity: O(1)

var removeDuplicates3 = function (nums) {
  let k = 1; // start from index 1, as nums[0] is always unique

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // place next unique element
      k++;
    }
  }

  return k; // return count of unique elements
};

// Explanation:
// - Since the array is sorted, duplicates are always adjacent.
// - Compare each element with the previous; if different, it’s unique.
// - Write it at index `k` and increment `k`.
// - `nums[0..k-1]` will hold all unique values in original order.
