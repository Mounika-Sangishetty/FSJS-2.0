// Task1
// Remove the language that have 2.0 in their name.

let language = document.querySelectorAll(".main__languages > a");
for(let i = 0; i < language.length; i++){
    if(language[i].innerText.includes("2.0")){
        language[i].style.display = "none";
    }
}

// Task 2
// Enable input field

let input = document.querySelector(".main__form-input");
input.disabled = false;

let submit = document.querySelector(".main__form-btn");
submit.disabled = false;

let form = document.querySelector("form");
form.addEventListener("submit", myfun);

function myfun(value){
    value.preventDefault();
    for(let i = 0; i < language.length; i++){
        if(language[i].innerText.includes("2.0")){
            language[i].style.display = "inline-block";
        }
    }
}
