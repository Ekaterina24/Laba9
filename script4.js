console.log('Задача 4');

function scalarMultiplication(c, Array) {
    let n = Array.length;
    let k = Array[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < k; j++) {
            Array[i][j] *= c;
        }
    }
    console.log(Array);
}

scalarMultiplication(3, [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);