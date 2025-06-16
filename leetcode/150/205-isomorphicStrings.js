// Time Complexity: O(n)
// Space Complexity: O(n)

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let mapST = new Map(); // map from s → t
  let mapTS = new Map(); // map from t → s

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // Check if s → t mapping exists and matches
    if (mapST.has(charS) && mapST.get(charS) !== charT) {
      return false;
    }

    // Check if t → s mapping exists and matches
    if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
      return false;
    }

    // Establish new mapping if it doesn't exist
    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
};

// Explanation:
// - Use two maps to ensure a consistent one-to-one mapping from `s` to `t` and from `t` to `s`.
// - This prevents cases like 'egg' vs. 'add' (valid), but not 'foo' vs. 'bar' (invalid because 'o' maps to both 'a' and 'r').
// - Ensures both direction constraints are respected.

// Time Complexity: O(n)
// Space Complexity: O(n)

var isIsomorphic2 = function (s, t) {
  const encode = (str) => {
    let map = new Map();
    let pattern = [];
    let code = 0;

    for (let char of str) {
      if (!map.has(char)) {
        map.set(char, code);
        code++;
      }
      pattern.push(map.get(char));
    }

    return pattern.join(",");
  };

  return encode(s) === encode(t);
};

// Explanation:
// - Convert both strings into their structural patterns (e.g., 'egg' → 0,1,1).
// - If both strings have the same pattern, they are isomorphic.
// - This method decouples the logic and is often used in pattern-matching questions.

// Time Complexity: O(n)
// Space Complexity: O(n)

var isIsomorphic3 = function (s, t) {
  let map = new Map(); // s → t mapping
  let seen = new Set(); // characters already mapped to in t

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // If the mapping exists, check consistency
    if (map.has(charS)) {
      if (map.get(charS) !== charT) return false;
    } else {
      // Ensure no two characters from `s` map to same `t` character
      if (seen.has(charT)) return false;

      map.set(charS, charT);
      seen.add(charT);
    }
  }

  return true;
};

// Explanation:
// - This uses just one map from `s` to `t` and a `Set` to ensure no duplicates in target.
// - It achieves the same effect as two maps but with less memory and slightly simpler logic.
// - Still meets O(n) time and O(n) space, while being concise and efficient.
