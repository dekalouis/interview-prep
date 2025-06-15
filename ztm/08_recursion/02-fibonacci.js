// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //Linear time O(n)
  let arr = [0, 1];
  for (let i = 1; i < n; i++) {
    // console.log(arr[i], `array--index`, i);
    arr.push(arr[i] + arr[i - 1]);
  }
  return arr[n];
}
console.log(fibonacciIterative(3)); //2
console.log(fibonacciIterative(5)); //5
console.log(fibonacciIterative(8)); //21

function fibonacciRecursive(n) {
  //exponential time O(2^n) really bad
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
/*
Call fibonacciRecursive(3)
  This isn't < 2, so it calls:
    -fibonacciRecursive(2) + fibonacciRecursive(1)
    -Inside fibonacciRecursive(2):
        This isn't < 2, so it calls:
          -fibonacciRecursive(1) + fibonacciRecursive(0)
          -fibonacciRecursive(1) returns 1 (base case)
          -fibonacciRecursive(0) returns 0 (base case)
          -So fibonacciRecursive(2) = 1 + 0 = 1
    -Inside fibonacciRecursive(1):
        This is < 2, so it returns 1 (base case)
So fibonacciRecursive(3) = 1 + 1 = 2
*/

console.log(fibonacciRecursive(3)); //2
console.log(fibonacciRecursive(5)); //5
console.log(fibonacciRecursive(8)); //21

// function fibonacciIterative(n){
//     let arr = [0, 1];
//     for (let i = 2; i < n + 1; i++){
//       arr.push(arr[i - 2] + arr[i -1]);
//     }
//    return arr[n];
//   }
//   fibonacciIterative(3);

//   function fibonacciRecursive(n) {
//     if (n < 2){
//       return n;
//     }
//     return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2)
//   }

//   fibonacciRecursive(6)
