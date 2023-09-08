// Task1
// Change the color of title

let title = document.querySelector(".caption > h1");
title.style.color = "#dc143c";

// Task2
// Change the button color

let button = document.querySelector(".add-to-cart");
button.addEventListener("mouseover", myfun1);
button.addEventListener("mouseout", myfun2);

function myfun1() {
    button.style.backgroundColor = "#dc143c";
}

function myfun2() {
    button.style.backgroundColor = "hsl(158, 36%, 37%)";
}