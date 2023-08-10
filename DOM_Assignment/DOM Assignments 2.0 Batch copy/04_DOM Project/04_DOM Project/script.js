// Task
// adding background color 

let card1 = document.querySelector(".clash-card__unit-stats--barbarian");
card1.style.backgroundColor = "#ec9b3b";
let card2 = document.querySelector(".clash-card__unit-stats--archer");
card2.style.backgroundColor = "#ee5487";
let card3 = document.querySelector(".clash-card__unit-stats--giant");
card3.style.backgroundColor = "#f6901a";
let card4 = document.querySelector(".clash-card__unit-stats--goblin");
card4.style.backgroundColor = "#82bb30";
let card5 = document.querySelector(".clash-card__unit-stats--wizard");
card5.style.backgroundColor = "#4facff";


// adding color to values

let values = document.querySelectorAll(".one-third");
values.forEach((text) => {
    text.style.color = "#ffffff";
})
