let jewels = "aA";
let stones = "aAAbbbb";

var numJewelsInStones = function (jewels, stones) {
  let res = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        res++;
      }
    }
  }
  console.log(res);
  return res;
};

numJewelsInStones(jewels, stones);

//this is an O(m*n) time complexity because we are iterating over 2 inputs, and they are nested with one another. A better solution is:

function numJewelSet(jewels, stones) {
  let jewelSet = new Set(jewels);
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      count++;
    }
  }

  console.log(jewelSet);
}

numJewelSet(jewels, stones);

//this one has an O(m+n) time complexity, where O(m) for the set creation
