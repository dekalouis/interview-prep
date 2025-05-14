// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //also O(n)
  //code here
  let answer;
  if (number === 0 || number === 1) {
    return 1;
  }
  answer = number * findFactorialRecursive(number - 1);
  return answer;
}

function findFactorialIterative(number) {
  //code here
  let answer = 1;
  for (let i = number; i > 1; i--) {
    //O(n) time complexity
    answer *= i;
  }
  console.log(`the answer is ${answer}`);
  return answer;
  // let answer = 1;
  // for (let i = 2; i <= number; i++) {
  //   answer = answer * i;
  // }
  // console.log(`the answer is ${answer}`);
  // return answer;
}

// findFactorialIterative(0); //1
// findFactorialIterative(2); //2
// findFactorialIterative(5); //120
// findFactorialIterative(3); //6
console.log(findFactorialRecursive(2));
console.log(findFactorialRecursive(1));
console.log(findFactorialRecursive(0));
console.log(findFactorialRecursive(5));
console.log(findFactorialRecursive(3));

// //ANSWER:
// function findFactorialIterative(number) {
//   let answer = 1;
//   // you actually no longer need the if statement because of the for loop
//   // if (number === 2) {
//   //   answer = 2;
//   // }
//   for (let i = 2; i <= number; i++) {
//     answer = answer * i;
//   }
//   return answer;
// }

// function findFactorialRecursive(number) {
//   if(number === 2) {
//     return 2;
//   }
//   return number * findFactorialRecursive(number - 1)
// }

// findFactorialIterative(5);
// findFactorialRecursive(5);

// //If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2
