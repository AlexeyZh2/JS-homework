// Разобрать методы массивов:
// slice
// includes
// concat
// indexOf / lastIndexOf
// Задача на цикл for of
// Создать массив из целых чисел. Отрицательные элементы массива перенести в новый массив.
let arr = [-2, 4, 7, -30, -87, 67];
let arrLessZero = [];
for (item of arr) {
  if (item < 0) {
    arrLessZero.push(item)
  }
}
console.log(arrLessZero);


// Задача на цикл for
// Создать массив из целых чисел, заполнить массив семью рандомными значениями в диапазоне [5; 300). 
//Поменять элементы с максимальным и минимальным значениями местами.

let array = [];

for (let i = 0; i < 7; i++) {
  let item = Math.floor(Math.random() * (300 - 5) + 5);
  array.push(item);

}
MAXNumber = Math.max(...array)
console.log(MAXNumber)
MAXIndex = array.indexOf(MAXNumber)
console.log(MAXIndex);
MINNumber = Math.min(...array)
console.log(MINNumber)
MINIndex = array.indexOf(MINNumber)
console.log(MINIndex)
console.log(array)
if (MAXIndex < MINIndex) {
 [array[MAXIndex], array[MINIndex]] = [array[MINIndex], array[MAXIndex]];
} else {
  [array[MINIndex], array[MAXIndex]] = [array[MAXIndex], array[MINIndex]];
}


console.log(array.indexOf(MAXNumber));
console.log(array)


// Задача на цикл while и метод массива
// Дан массив и строка. Значение строки необходимо получать от пользователя в цикле while и добавлять в массив, 
//если такой строки в нем еще не существует. 0 для выхода из цикла.

let array1 = ["ночь", "улица", "фонарь", "аптека"]
let count = array1.length, i = 0;
while (true) {
  let str = prompt('ВВедите слово');
  if (str === "0" || str === null) break;
  if (!array1.includes(str)) array1.push(str);
}


console.log(array1);

// Задание по git
// Изменения в собственной ветке текущего репозитория должны быть сохранены (commit)
// Переключиться в ветку в master, и выполнить git pull
// Переключиться в свою ветку и выполнить слияние с мастер. В случае конфликта предпочтение
//отдаем собственномк коду (не коду с github)