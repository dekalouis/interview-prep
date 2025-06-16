// Time Complexity: O(n^2)
// Space Complexity: O(1)

var twoSum = function (numbers, target) {
  // Loop through each element as the first number
  for (let i = 0; i < numbers.length; i++) {
    // For each first number, loop again to find the second number
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        // Return 1-based indices
        return [i + 1, j + 1];
      }
    }
  }
};

// Explanation:
// - Try every pair using two nested loops.
// - Return when the sum equals the target.
// - Works, but is too slow for large arrays.
// - Good for understanding, but not acceptable in interviews or real use.

// Time Complexity: O(n)
// Space Complexity: O(n)

var twoSum2 = function (numbers, target) {
  let map = new Map(); // stores number → index

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i]; // the number we want to find

    if (map.has(complement)) {
      // Found the pair
      return [map.get(complement) + 1, i + 1]; // return 1-based index
    }

    // Store the current number and its index
    map.set(numbers[i], i);
  }
};

// Explanation:
// - For each number, calculate the difference (complement).
// - If complement exists in the map, return the indices.
// - Uses extra space for the map, so not allowed by this problem's constraints.
// - Better for unsorted arrays, not ideal here.

// Time Complexity: O(n)
// Space Complexity: O(1)

var twoSum3 = function (numbers, target) {
  let left = 0; // start from the beginning
  let right = numbers.length - 1; // start from the end

  while (left < right) {
    let sum = numbers[left] + numbers[right]; // current sum

    if (sum === target) {
      // Found the pair, return 1-based indices
      return [left + 1, right + 1];
    } else if (sum < target) {
      // Need a bigger sum, move the left pointer to the right
      left++;
    } else {
      // Need a smaller sum, move the right pointer to the left
      right--;
    }
  }
};

// Explanation:
// - Since the array is sorted, we can use the two-pointer technique.
// - Start from both ends and adjust based on whether the sum is too small or too large.
// - No extra space is used (in-place).
// - Most optimal solution for this specific problem.
