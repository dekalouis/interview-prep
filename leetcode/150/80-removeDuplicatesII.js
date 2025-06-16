var removeDuplicates = function (nums) {
  // Loop starts from index 2 because the first two elements are always allowed
  for (let i = 2; i < nums.length; i++) {
    // If current element is the same as the one two places before it,
    // it means we've already kept two occurrences of this value
    if (nums[i] === nums[i - 2]) {
      // Remove the current duplicate from the array
      nums.splice(i, 1);

      // Decrement index to re-check this position on the next iteration,
      // because splice shifts the array left
      i--;
    }
  }

  // Return the updated length of the array, which is now valid up to index nums.length
  return nums.length;
};

var removeDuplicates2 = function (nums) {
  // If the array has 2 or fewer elements, it's already valid
  if (nums.length <= 2) return nums.length;

  // Pointer that tracks where to write the next valid value
  let insertPos = 2;

  // Start from index 2 because the first two elements are always allowed
  for (let i = 2; i < nums.length; i++) {
    // Compare current number with the number two positions before the insert point.
    // If it's different, it's safe to write it in.
    if (nums[i] !== nums[insertPos - 2]) {
      // Copy current number to insertPos
      nums[insertPos] = nums[i];

      // Move the insert pointer forward
      insertPos++;
    }

    // If nums[i] === nums[insertPos - 2], skip the number
    // because it's a third or later duplicate
  }

  // After the loop, insertPos is the length of the valid array
  return insertPos;
};
