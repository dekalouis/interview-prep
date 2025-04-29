//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//brute force would be O(n^2)

//withthe hashtable O(n)
function firstRecurringCharacter(input) {
  let hash = {};

  for (let i = 0; i < input.length; i++) {
    //* O(n) because need to loop through input array.
    //! my cooler version
    // if (hash[input[i]] > 1) {
    //   //check if there is a value of eg hash.1 = 1 before doing anything else
    //   return input[i];
    // } else {
    //   if (!hash[input[i]]) {
    //     hash[input[i]] = 0;
    //   }
    //   hash[input[i]]++;
    // }
    //!ztm's lamer one
    if (hash[input[i]] !== undefined) {
      return input[i];
    } else {
      hash[input[i]] = i;
    }
    // console.log(hash);
  }
  return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 3, 4, 5]));
// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

//! BRUTE FORCE
function firstRecurringCharacterBrute(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      console.log(input[i], ` ->> `, input[j]);
      if (input[j] === input[i]) {
        return input[i];
        // console.log("match");
      }
    }
  }
  return undefined;
}

// console.log(firstRecurringCharacterBrute([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacterBrute([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacterBrute([2, 3, 4, 5]));
console.log(firstRecurringCharacterBrute([2, 5, 5, 2, 3, 5, 1, 2, 4]));
