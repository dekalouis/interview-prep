// Time Complexity: O(n)
// Space Complexity: O(n)

var majorityElement = function (nums) {
  let countMap = new Map(); // stores number → count

  for (let num of nums) {
    let count = countMap.get(num) || 0;
    countMap.set(num, count + 1); // increment the count

    if (count + 1 > nums.length / 2) {
      return num; // return if it crosses majority threshold
    }
  }
};

// Explanation:
// - Iterate through the array and count occurrences of each number using a map.
// - If any number's count exceeds ⌊n/2⌋, we return it as the majority.
// - Easy to understand but uses extra space to store counts.

// Time Complexity: O(n log n)
// Space Complexity: O(1) if sorting in-place

var majorityElement = function (nums) {
  nums.sort((a, b) => a - b); // sort the array in ascending order
  return nums[Math.floor(nums.length / 2)]; // return the middle element
};

// Explanation:
// - After sorting, the majority element must appear in the middle index.
// - Why? Because it occurs more than n/2 times, it dominates the center of the array.
// - Efficient in code but not optimal in time (due to sorting).

// Time Complexity: O(n)
// Space Complexity: O(1)

var majorityElement = function (nums) {
  let candidate = null; // current majority candidate
  let count = 0; // current vote count for candidate

  for (let num of nums) {
    if (count === 0) {
      candidate = num; // reset candidate
    }

    // If this number matches the candidate, increment vote
    // Otherwise, it's a vote against, so decrement
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

// Explanation:
// - This algorithm keeps a running "vote" for a potential majority element.
// - If count goes to 0, a new candidate is picked.
// - Because the majority element appears more than n/2 times, it will always win in the end.
// - Very space-efficient and meets the follow-up requirement: O(n) time and O(1) space.
