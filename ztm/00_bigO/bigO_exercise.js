// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n) // O(1) per iteration
    let stranger = true; // O(n) // O(1) per iteration
    a++; // O(n) // O(1) per iteration
  }
  return a; // O(1)
}
//Big O = 6 + n
