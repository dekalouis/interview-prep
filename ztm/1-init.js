// let large = new Array(100).fill("nemo");

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("foundnemo");
//     }
//   }
// }

// findNemo(large);

//this is bigO(n) -->linear time as the input grows, the operation and element grows

//a constant time is O(1), where for example, regardless of how long the array is, we are only grabbing the FIRST item of the array.
/*
let input = ['prize1', 'prize2', 'prize3'...]
function checkBox(array) {
    console.log(array[0])
}
*/

function processPatients(patients, turns) {
  let result = [];

  for (let i = 0; t < turns; t++) {
    // First, find patients who have waited 3 or more turns
    let waitingTooLong = patients.filter((p) => p[2] >= 3);

    let nextPatient;
    if (waitingTooLong.length > 0) {
      // Among those, pick the one who appears first in the list
      nextPatient = waitingTooLong[0];
    } else {
      // Else, pick the patient with the highest severity
      patients.sort((a, b) => b[1] - a[1]);
      nextPatient = patients[0];
    }

    // Push selected patient ID to result
    result.push(nextPatient[0]);

    // Remove the selected patient from the list
    patients = patients.filter((p) => p[0] !== nextPatient[0]);

    // Increase wait time for remaining patients
    for (let i = 0; i < patients.length; i++) {
      patients[i][2]++;
    }
  }

  return result;
}
console.log(
  processPatients(
    [
      ["P1", 3, 0],
      ["P2", 8, 0],
      ["P3", 5, 0],
      ["P4", 3, 0],
    ],
    4
  )
);
// Output: ['P2', 'P3', 'P1', 'P4']

console.log(
  processPatients(
    [
      ["P1", 1, 0],
      ["P2", 2, 0],
      ["P3", 3, 0],
      ["P4", 4, 0],
      ["P5", 5, 0],
    ],
    5
  )
);
// Output: ['P5', 'P4', 'P1', 'P2', 'P3']
