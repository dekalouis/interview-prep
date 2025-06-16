// Time Complexity: O(n)
// Space Complexity: O(n)

var isPalindrome = function (s) {
  // Use regex to remove non-alphanumeric characters, and convert to lowercase
  let cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Reverse the cleaned string
  let reversed = cleaned.split("").reverse().join("");

  // Check if original cleaned string equals the reversed version
  return cleaned === reversed;
};

// Explanation:
// - Removes everything except letters and numbers using regex.
// - Converts the cleaned string to lowercase for case-insensitive comparison.
// - Compares the cleaned string with its reverse.
// - Uses extra space for both cleaned and reversed strings.
// - Simple and beginner-friendly, but not the most space-efficient.

// Time Complexity: O(n)
// Space Complexity: O(n)

// Time Complexity: O(n)
// Space Complexity: O(n)

var isPalindrome2 = function (s) {
  let cleaned = "";

  // Manually build a cleaned string with only alphanumeric characters
  for (let char of s) {
    if (/[a-z0-9]/i.test(char)) {
      cleaned += char.toLowerCase(); // convert to lowercase and append
    }
  }

  // Use two pointers to compare characters from both ends
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false; // if mismatch, it's not a palindrome
    }
    left++;
    right--;
  }

  return true; // all characters matched
};

// Explanation:
// - Builds a valid lowercase alphanumeric string manually (slow due to string concat).
// - Uses two-pointer technique to compare characters from start and end inward.
// - Still uses extra space for `cleaned` string, but avoids reversing.
// - Easier to understand for beginners learning pointer logic.

// Time Complexity: O(n)
// Space Complexity: O(1)

var isPalindrome3 = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Move left pointer to next valid alphanumeric character
    while (left < right && !isAlphaNum(s[left])) {
      left++;
    }

    // Move right pointer to previous valid alphanumeric character
    while (left < right && !isAlphaNum(s[right])) {
      right--;
    }

    // Compare characters in lowercase
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false; // mismatch found
    }

    left++;
    right--;
  }

  return true;
};

// Helper function to check if character is alphanumeric
function isAlphaNum(c) {
  return /^[a-z0-9]$/i.test(c);
}

// Explanation:
// - No extra strings are created, everything is done using two pointers.
// - Skips non-alphanumeric characters on the fly.
// - Converts characters to lowercase only for comparison.
// - Very space-efficient and fast, suitable for large strings (up to 2 * 10^5).
