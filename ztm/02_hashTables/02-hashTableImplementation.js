// class HashTable {
//     constructor(size) {
//         this.data = new Array(size);
//     }

//     // O(1)
//     _hash(key) {
//         let hash = 0;

//         for (let i = 0; i < key.length; i++) {
//             hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//         }

//         return hash;
//     }

//     // O(1)
//     set(key, value) {
//         let address = this._hash(key);

//         if (!this.data[address]) {
//             this.data[address] = [];
//         }

//         this.data[address].push([key, value]);
//     }

//     get(key) {
//         let address = this._hash(key);

//         const currentBucket = this.data[address];

//         if (currentBucket.length) {
//             for (let i = 0; i < currentBucket.length; i++) {
//                 if (currentBucket[i][0] === key) {
//                     return currentBucket[i][1];
//                 }
//             }
//         }

//         return undefined;
//     }

//     keys() {
//         const keysArray = [];
//         const flatData = this.data.flat();

//         flatData.forEach(entry => keysArray.push(entry[0]));

//         return keysArray;
//     }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 10000);
// myHashTable.set("apples", 54);
// myHashTable.set("oranges", 2);
// myHashTable.get("grapes");
// console.log(myHashTable.keys());

//*=========

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // O(1)
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      //loops the string for every character and returns the hash
    }

    return hash;
  }

  set(key, value) {
    //O(1)
    // this.data.push(key, value);
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } //WITHOUT ANY COLLISSION THIS IS O(1), but becuase our example only has 2 allocated slots, it its silly. Multiple collision would cause the loop inside to be O(n)

  keys() {}
}

const myHashTable = new HashTable(10);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 27);

console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
// console.dir(myHashTable, { depth: null });
