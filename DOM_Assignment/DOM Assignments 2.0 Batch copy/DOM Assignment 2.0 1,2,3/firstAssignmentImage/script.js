// Task1
// adding Hire me

let hireme = document.createElement("li");
hireme.innerHTML = "Hire me";
//console.log(hireme);
document.getElementById("navul").appendChild(hireme);

// Task2
// Edit search bar as search my project

document.getElementById("searchbar").placeholder = "Search My Project";

//Task3
// Edit context
document.getElementById("status").innerText = "an Employee";
document.getElementById("company").innerText = "iNeuron Intelligence Pvt Ltd";

//Task4
// Change the image
document.getElementById("image").src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

//Task5
// Creating a button
let button = document.createElement("button");
button.innerText = "Support Me";
document.getElementById("buttonsection").appendChild(button);