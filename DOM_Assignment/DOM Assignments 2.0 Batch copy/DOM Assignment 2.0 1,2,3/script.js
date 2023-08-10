// Task1
// adding Hire me

let hireme = document.createElement("li");
hireme.innerHTML = "Hire me";
let ul = document.getElementsByTagName("ul")[0];
ul.appendChild(hireme);

// Task2
// Edit search bar as search my project

document.querySelector(".search-field > input").placeholder = "Search My Project";

//Task3
// Edit context
let heroleft = document.querySelectorAll(".hero-left-section > p > span");
heroleft[1].innerText = "an Employee";
heroleft[2].innerText = "iNeuron Intelligence Pvt Ltd";

//Task4
// Change the image
document.querySelector(".hero-right-section > img").src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

//Task5
// Creating a button
let button = document.createElement("button");
button.innerText = "Support Me";
document.querySelector(".hero-right-section-btns").appendChild(button);