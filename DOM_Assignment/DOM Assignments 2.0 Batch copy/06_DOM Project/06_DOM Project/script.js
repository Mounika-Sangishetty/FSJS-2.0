// Task1
// Add ineuron logo

let logo = document.querySelector("main > header > img");
logo.src = "./assets/ineuron-logo.png";

// Task2
// Change the price
let price = document.querySelector(".app_price > span");
price.textContent = "$10";

// Task3
// add linkedin logo
let linkedin = document.querySelector(".footer_social");
let linkedin_section = document.createElement("div");
linkedin_section.classList.add("footer_social_ico");
linkedin_section.innerHTML = '<i class="fa-brands fa-linkedin"></i>';
linkedin.appendChild(linkedin_section);