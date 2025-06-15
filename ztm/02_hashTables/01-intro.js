let user = {
  name: "Kyle",
  age: 54,
  magic: true,
  scream: function () {
    console.log("aaaaaah!");
  },
};

console.log(user.name); // Lookup O(1)
user.spell = "abra kadabra"; // Insert O(1);
console.log(user);

//when there is a collision, where different data are allocated to the same memory space, it slows down reading and writing to O(n/k) => O(n)

//JS objects the keys are always stringified, but we have Map and Set
const a = new Map(); //which allows us to set ANY datatype as the key. it also maintains insertion order.
//regular objects have NO order.

const b = new Set(); //like objects but ONLY stores the key, no values
