// Task1
// Add a button

let array = document.querySelectorAll(".nav-center > div");
let buttonsection = array[2];
let button = document.createElement("a");
button.href = "index.html";
button.classList.add("btn");
button.innerText = "Pro Subscription";
buttonsection.appendChild(button);

//Task2
// Add chinese to recipes

let recipe_containter = document.querySelector(".tags-container > div");
let recipe = document.createElement("a");
recipe.href = "#";
recipe.innerText = "Chinese (7)";
recipe_containter.appendChild(recipe);

//Task3
// Add text color

let recipe_text = document.querySelectorAll(".recipe-text");
recipe_text.forEach((text) => {
    text.style.color = "rgb(112, 32, 187)";
});

//Task4
// Add 6th card

let card = document.querySelector(".recipe-gallery");
let card6 = document.createElement("div");
card6.classList.add("card");
card.appendChild(card6);

let card6_content = document.createElement("a");
card6_content.href = "#";
card6_content.classList.add("recipe-text");
card6.appendChild(card6_content);

let card6_img = document.createElement("img");
card6_img.src = "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
card6_img.classList.add("recipe-img");
card6_content.appendChild(card6_img);

let card6_title = document.createElement("h5");
card6_title.classList.add("recipe-name");
card6_title.innerText = "Pasta";
card6_title.style.color = "rgb(112, 32, 187)";
card6_content.appendChild(card6_title);

let card6_desp = document.createElement("p");
card6_desp.classList.add("recipe-disp");
card6_desp.innerText = "Prep : 10min | Cook : 15min";
card6_desp.style.color = "rgb(112, 32, 187)";
card6_content.appendChild(card6_desp);
