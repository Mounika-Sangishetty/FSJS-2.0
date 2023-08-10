let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// second assignment
// Task1
// Adding background color to heading

let heading = document.querySelectorAll(".accordian > h3");
heading.forEach(myfun);
function myfun(h3) {
    h3.style.backgroundColor = "#dadaf8";
}

// Task2
// Adding a heading with text

let heading4 = document.createElement("div");
heading4.classList.add("accordian")
heading4.id = "heading4";
document.querySelector(".accordian-wrapper").appendChild(heading4);
let skills = document.createElement("h3");
skills.innerText = "Skills";
skills.style.backgroundColor = "#dadaf8";
document.getElementById("heading4").appendChild(skills);
let text = document.createElement("p");
text.innerText = "I posses a very good command over the Full Stack Developmet technologies like MERN which can be seen in my work over the Github";
document.getElementById("heading4").appendChild(text);

skills.addEventListener("click", () =>{
  let context = skills.nextElementSibling;
  if (context.style.display === "block") {
    context.style.display = "none";
  } else {
    context.style.display = "block";
  }
});