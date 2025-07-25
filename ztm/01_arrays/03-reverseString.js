function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse2(str) {
  //check for valid input
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

reverse("Timbits Hi");
reverse("Timbits Hi");
reverse3("Timbits Hi");

//my way of doing it
function reverseString1(string) {
  let res = "";
  for (let i = string.length - 1; i >= 0; i--) {
    res += string[i];
  }
  console.log(res);
}

function reverseString2(string) {
  console.log(string.split("").reverse().join(""));
}

reverseString1("Hi I am Deka");
reverseString2("Hi I am Dekoi");
