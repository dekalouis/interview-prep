// class HashTable {
//     constructor(size){
//       this.data = new Array(size);
//     }

//     _hash(key) {
//       let hash = 0;
//       for (let i =0; i < key.length; i++){
//           hash = (hash + key.charCodeAt(i) * i) % this.data.length
//       }
//       return hash;
//     }
//   }

//   const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)
//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')

//====
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

  //!older
  keys() {
    let keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    console.log(keysArray);
  }

  values() {
    let valueArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valueArr.push(this.data[i][0][1]);
      }
    }
    console.log(valueArr);
  }

  //?better version of keys
  // keys() {
  //   if (!this.data.length) {
  //     return undefined;
  //   }
  //   let keysArr = [];
  //   //loop thtough all the elements
  //   for (let i = 0; i < this.data.length; i++) {
  //     //if its not an emptymemorycell
  //     if (this.data[i] && this.data[i].length) {
  //       //but it laso loops though all the potential collisions
  //       if (this.data.length > 1) {
  //         for (let j = 0; j < this.data[i].length; j++) {
  //           keysArr.push(this.data[i][j][0]);
  //         }
  //       } else {
  //         keysArr.push(this.data[i][0]);
  //       }
  //     }
  //   }
  //   console.log(keysArr);
  // }
}

const myHashTable = new HashTable(10);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 27);

// console.log(myHashTable.get("grapes"));
// console.log(myHashTable.get("apples"));
console.dir(myHashTable, { depth: null });

// console.log(myHashTable.keys());
myHashTable.keys();
myHashTable.values();
