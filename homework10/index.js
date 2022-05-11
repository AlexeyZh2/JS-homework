"use strict";


let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/300"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/300"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/300"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/300"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/300"
    }
};

let cardsSection = document.querySelector(".cards-section");
for (let x of Object.values(goods)) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = x.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", x.img);

    let price = document.createElement("p");
    price.innerText = x.price;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (x.count > 0) {
        count.innerHTML =
            `<button class = "minos">-</button>
             <span class = "span_count" data_count = "${x.count}">0</span>
             <button class = "plus">+</button>`;
    } else {
        count.innerHTML = "<span>Товара нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
}
//let countValue = 0
document.querySelectorAll(".plus").forEach((item) => item.addEventListener("click", plus))
function plus(event) {
    let countValue = +event.target.previousElementSibling.textContent;
    countValue++
    event.target.previousElementSibling.innerText = countValue;
    if (event.target.previousElementSibling.getAttribute("data_count") < countValue) {
        event.target.previousElementSibling.innerText = "Cтолько много товара нет!)"
    }



}
document.querySelectorAll(".minos").forEach((item) => item.addEventListener("click", minos))
function minos(event) {
    let countValue = +event.target.nextElementSibling.textContent;
    countValue--;
    if (+event.target.nextElementSibling.textContent >= 0) {
        event.target.nextElementSibling.innerText = countValue
    }
    if (event.target.nextElementSibling.textContent = "Cтолько много товара нет!)") {
        // event.target.nextElementSibling.textContent = +event.target.nextElementSibling.getAttribute("data_count")
        // countValue--;
        countValue = +event.target.nextElementSibling.getAttribute("data_count")
        event.target.nextElementSibling.textContent = countValue
        console.log(countValue)
    }
    if (countValue === 0 || countValue < 0) {
        event.target.nextElementSibling.innerText = 0
    }
}