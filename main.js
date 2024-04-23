const header = document.querySelector("header");
const html = document.querySelector("html");
const button = document.querySelector(".button");
const hide = document.querySelector(".header-list");

button.addEventListener("click", openClose);


function openClose(){
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        html.classList.remove("open");
        hide.classList.remove("open");
        button.textContent = "Menu";

    } else{
        header.classList.add("open");
        html.classList.add("open");
        hide.classList.add("open");
        button.textContent = "Close";
    }
}