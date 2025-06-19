function nonConstructibleChange(coins) {
  // Write your code here.
  //sort first, then set currentchange, loop and then decide if the coin is greater
  //than the current one plus 1, then return the curr+1, keep adding the coin to current
  //dont forget to return the currentchange again after

  coins.sort((a, b) => a - b);
  let currentChange = 0;

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];

    if (coin > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += coin;
  }

  return currentChange + 1;
}

coins = [5, 7, 1, 1, 2, 3, 22];
//20
coins2 = [1, 1, 1, 1, 1];
//6

console.log(nonConstructibleChange(coins));
console.log(nonConstructibleChange(coins2));
