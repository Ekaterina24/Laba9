console.log('Задача 2');

function arrayCut(Arr) {
    let len = Arr.length;
    for (let i = 0; i < len; i++) {
        if (Arr.length > 1) {
            console.log(Arr.pop() + " осталось " + Arr);
        } else {
            console.log(Arr[0])
        }
    }
}

arrayCut([1, 2, 3])