// Задача 1
// Написать функцию, которая принимает на вход три аргумента:

// obj - объект, например, items,
// from - число,
// to - число.
// Функция формирует и возвращает новый ОБЪЕКТ с объектами, значения 
// свойств price которых лежат в диапазоне от значения from до значения to, не включая to.
let items = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function priceList(obj, from, to) {
    let itemPrice = {};
    for (let item in obj) {
        if (obj[item].price > from && obj[item].price < to) {

            itemPrice[item] = obj[item];
        }
    }
    return itemPrice;
}
let newArr = priceList(items, 1000, 3000);
console.log(newArr)


// Задача 2
// Написать функцию, которая принимает на вход три аргумента:

// obj - объект, например, items,
// itemTitle - строка, название товара, который хочет приобрести пользователь,
// countToCart - число, количество товара, который хочет приобрести пользователь.
// Функция должна найти товар с указанным в itemTitle названием и:

// если количество позволяет, то уменьшить значение свойства count в переданном объекте на countToCart вернуть true,

// если количество не позволяет, то вывести информацию об этом в консоль и вернуть false.

function qwerty(obj, itemTitle, countToCart) {
    let newCount;
    for (let item in obj) {

        if (obj[item].title === itemTitle) {
            if (countToCart < obj[item].count) {
                newCount = obj[item].count - countToCart;
                obj[item].count = newCount

                console.log("Товар можно приобрести")
            }
            if (countToCart > obj[item].count) {
                console.log("Необходимого количества товара нет в наличии!")
                return false;
            }
        }
    }
}


qwerty(items, "Гитара", 60)
console.log(items)
// Задача 3
// Отсортировать массив books по значению свойства title вложенных объектов

let books = [
    { author: "Толстой", title: "Война и мир" },
    { author: "Пушкин", title: "Пир во время чумы" },
    { author: "Лермонтов", title: "Тамань" },
    { author: "Гончаров", title: "Обломов" },
    { author: "Лермонтов", title: "Герой нашего времени" },
    { author: "Пушкин", title: "Руслан и Людмила" },
    { author: "Лермонтов", title: "И скучно, и грустно" },
];
let booksSort = books.sort(function (a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
});
console.log(booksSort)


function generateField (n) {
    if (n<3) {
        return;
    }
    //добавление поля в html
    //let cell = получить ячейки
    //let randomCell = cells[рандомный индукс]
    //randomCell - добавить атрибут

}