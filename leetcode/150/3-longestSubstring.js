// Time Complexity: O(n^3)
// Space Complexity: O(n)

var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
};

// Explanation:
// - Try every possible starting point `i`
// - For each starting point, extend substring with `j` while all characters are unique.
// - Stop extending when a repeated character is found.
// - Set helps ensure all characters in the current substring are unique.

// Time Complexity: O(2n) = O(n)
// Space Complexity: O(n)

var lengthOfLongestSubstring2 = function (s) {
  let set = new Set();
  let left = 0,
    maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]); // shrink window
      left++;
    }
    set.add(s[right]); // expand window
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// Explanation:
// - Use sliding window to keep track of current non-repeating substring.
// - Move `right` pointer to expand window, and `left` to shrink when a duplicate is found.
// - Set ensures fast lookup and removal of characters.

// Time Complexity: O(n)
// Space Complexity: O(n)

var lengthOfLongestSubstring3 = function (s) {
  let map = new Map(); // stores character -> last seen index
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1; // jump left past the duplicate
    }

    map.set(char, right); // update latest index
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// Explanation:
// - Same sliding window principle, but map keeps the last index of each character.
// - When duplicate is found, directly jump `left` to avoid re-checking characters.
// - This avoids the inner loop of deletion in Solution 2, making it slightly faster.
