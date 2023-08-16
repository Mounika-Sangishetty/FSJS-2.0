// Task1
// Adding scrollbar to the rightblackbox and adding random content

let rightbox = document.querySelector(".new");
rightbox.style.overflowY = "scroll";

let linebreak = document.createElement("hr");
linebreak.classList.add("hr-line");
rightbox.appendChild(linebreak);

let heading = document.createElement("h2");
heading.classList.add("new-head");
heading.innerText = "This is my custom heading";
rightbox.appendChild(heading);

let para = document.createElement("p");
para.classList.add("new-p");
para.innerText = "This is my custom paragraph";
rightbox.appendChild(para);

// Task2
// Making background invisible

let body = document.querySelector("body");
body.style.backgroundImage = "none";

// Task 3


let button = document.querySelector(".navbar-toggler");
button.addEventListener("click", myfunc);
function myfunc(){
    let x = document.getElementById("navbarTogglerDemo01");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}