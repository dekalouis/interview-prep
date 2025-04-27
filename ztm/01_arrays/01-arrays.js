const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.
console.log(strings[2]); //O(1) because lookup is constant

//push
strings.push("e"); //O(1) operation, just adding to the array's end

//pop
strings.pop(); //O(1) same like the above
strings.pop();

//unshift
strings.unshift("x"); //adding at the beginning O(n) because it needs to loop to the entire array adding it to the new array with the newly shifted item

//!splice - adding to the middle of the array (start of the index number, delete count how many to delete) both inserting and deleting are O(n)
strings.splice(2, 0, "alien"); //also O(n/2) basically O(n) because needs to loop through entire array

console.log(strings);

//arrays in JS and python (highlevel language) act like a dynamic arrays, where you dont need to think about resizing (copying the array and pasting a new one), instead array items can be added without thinking too much about memory

///======================================================
//? reference types
//keep in mind arrays and objects are pass by reference (not value) where if you declare and then declare a new variable to the same obj/arr you will just reference to the same memory, unless you initiate a new variable with the same value, it will be stored in a different memory allocation
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

//? context vs scope
//scope is when you have a variable inside a function/obj, the world outside CANNOT access it (referenceError)
//context simply explains where we are within the object, where the "this" keyword simply shows what is the object that we are in right now.
//sort of checking to the left of the dot.

const object4 = {
  a: function () {
    console.log(this);
  },
};

//? instantiation
//when you make a copy of an object and reuse the code

class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }

  play() {
    console.log(`WEEE I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Sean", "Dark Magic");
