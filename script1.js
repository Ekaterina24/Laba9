console.log('Задача 1');

let film = {
    name: "Последний богатырь",
    type: "comedy",
    year: "2020",
    month: "December"
};

console.log("Список свойст - " + Object.keys(film));
console.log("Фильм " + film.name + " жанра " + film.type + " вышел на экран в " + film.month + ' ' + film.year + " года");