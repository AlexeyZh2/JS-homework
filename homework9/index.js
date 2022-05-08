"use strict";
// Задача 1
// Добавить функционал к задаче из task9 - генерация поля:

// Пользователю дается несколько попыток на то, чтобы найти приз, спрятанный на поле.
// Игра должна закончится, если пользователь нашел приз или у его закончилось количество попыток.
let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};
let keysTask2 = Object.keys(prises)

function generateField(n) {
    let table = document.createElement("table");
    table.classList.add('field')
    if (n < 3) {
        return
    }
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    for (let item of arr) {
        let row = table.insertRow();
        let id = 0
        for (let item of arr) {
            id++
            let cell = row.insertCell();
            cell.setAttribute("id", id)
            cell.style.border = "1px solid black"
            cell.style.width = "90px"
            cell.style.height = "90px"
        }
    }

    table.rows[Math.floor(Math.random() * n)].cells[Math.floor(Math.random() * n)].setAttribute("data-prise", "Вы выиграли!")


    document.body.append(table)
}
generateField(5)

let countClick = 0;
document.querySelector(".field").addEventListener("click", game)
function game(event) {
    console.log(this)
    countClick++;
    console.log(countClick)
    console.log("Ура!")
    if (event.target.hasAttribute("data-prise")) {
        event.target.innerText = "Вы выиграли!"
        event.target.style.backgroundColor = "red"
        this.removeEventListener("click", game)
    } else if (countClick === 10) {
        this.removeEventListener("click", game)

    } else {
        event.target.innerText = `Осталось ${10 - countClick} попытка(ок)!`
    }

}


