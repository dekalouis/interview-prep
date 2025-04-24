let string = "hello";

var scoreOfString = function (s) {
  // let arr = [];
  // for (let i = 0; i < s.length; i++) {
  //   arr.push(s.charCodeAt(i));
  // }
  // let res = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (i === 0) {
  //     continue;
  //   } else {
  //     res += Math.abs(arr[i] - arr[i - 1]);
  //   }
  // }
  // return res;

  let res = 0;
  for (let i = 0; i < s.length - 1; i++) {
    res += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return res;
};

console.log(scoreOfString(string));

/*⏰ Time complexity: O(n). We iterate through the string once, so the time complexity is linear.
🧺 Space complexity: O(1). We only use a few extra variables for the computation, so the space complexity is constant.*/
