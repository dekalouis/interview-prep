let ip1 = "1.1.1.1";
let ip2 = "255.100.50.0";

var defangIPaddr = function (address) {
  res = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      res += "[.]";
    } else {
      res += address[i];
    }
  }
  return res;
};
//time complexity is O(n)
//space is O(n)

console.log(defangIPaddr(ip1));
console.log(defangIPaddr(ip2));

function defangIP(address) {
  return address.split(".").join("[.]");
}
