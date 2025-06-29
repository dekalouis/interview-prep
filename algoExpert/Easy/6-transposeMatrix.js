let input = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function transposeMatrix(matrix) {
    let transposed = [];

    for (let i = 0; i< matrix[0].length; i++) {
        let newRow = [];
        for (let j = 0; j < matrix.length; j++) {
            newRow.push(matrix[j][i]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

console.log(transposeMatrix(input));
// Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]