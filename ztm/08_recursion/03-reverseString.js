function reverseString(str) {
  return str.split("").reverse().join(""); //so cool

  //more intuitive i guess
  //   let arr = str.split("");
  //   let res = "";

  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     res += arr[i];
  //   }
  //   return res;
}

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    console.log(`substring 1-->`, str.substr(1), `charAt-->`, str.charAt(0));
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString("hola"));
console.log(reverseStringRecursive("hola"));
