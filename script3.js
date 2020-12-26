console.log('Задача 3');

function palindrom(String) {
    if (String == String.split("").reverse().join("")) {
        console.log('true');
    } else {
        console.log('false');
    }

}

palindrom("кашалот");
palindrom("потоп");
