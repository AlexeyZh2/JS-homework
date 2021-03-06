'use strict'
// Задача 1 на метод sort()
// Дан массив, необходимо отсортировать его по возрастанию длин вложенных массивов

let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
let numbersSort = numbers.sort(function (a, b) {
    return a.length - b.length
})
console.log(numbersSort);
// Задача 2 на методы sort() и Math.random()
// Необходимо случайным образом изменить порядок элементов в массиве.

let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];


console.log(presents.sort(() => Math.random() - 0.5));
console.log(Math.random() - 0.5)
// Задача 3 на методы filter() и includes()
// Создать массив из пересечений массива first и second.

let first = ["Апрель", "Июль", "Октябрь", "Май"],
    second = ["Май", "Январь", "Декабрь", "Октябрь"];
let third = first.filter(item => second.includes(item));
console.log(third)

// В итоге должен быть создан массив: ["Октябрь", "Май"]

// Задача 4 на метод some()
// Дан массив температур. Необходимо выяснить, поднималась ли температура выше 500, вывести информацию об этом в консоль.

let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];
function temperature500(arr) {
    for (let bigArr of arr) {

        if (bigArr.some(x => x > 500)) {
            console.log(`Температура поднималась более 500 градусов`)
        }
        // for (let number of bigArr) {

        //     if (number > 500) {
        //         console.log(`Температура поднималась более 500 градусов и составила ${number} градусов`)
        //     }
        // }
    }
}

temperature500(temperatures)