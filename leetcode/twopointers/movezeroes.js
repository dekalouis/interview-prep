// Move zeroes, for an array of integer, move all the zeroes to the end of the array, while maintaining the rest of the data where they are, DO NOT RETURN ANYTHING, it should do this in place.

let nums = [0, 1, 0, 3, 12];
//output should be [1,3,12,0,0]

// nums.splice(0, 0, nums[1]);
// console.log(nums);

function moveZero(arr) {
  //validasi buat kalau array length satu
  if (arr.length < 2) {
    return arr;
  }

  //bikin pointer kedua (i itu pointer pertama)
  let nonZeroIndex = 0;

  //di loop jadi untuk setiap angka yang bukan 0, kita ganti array[nonZero yang adalah 0 di pertama] terus diganti dengan isi arr[i] terus nonzero indexnya ditambah buat posisi selanjutnya.
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  //kita loop lagi untuk sisanya, dimana nonzeroindex sudah melewati SEMUA angka yang tidak 0, jadi sisanya kita ganti ke 0 aja
  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }

  console.log(arr);
}

console.log(moveZero(nums));

// TIME COMPLEXITY IS O(n), dimana diiterasi DUA kali, tapi jadinya O(2n) = O(n), spacenya O(1) karena constant ga butuh array tambahan
