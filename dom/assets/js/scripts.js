const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementById("footerId");
const body = document.getElementById("bodyId");


button.addEventListener("click", toogleDarkMode);

function toogleDarkMode(){
    h1.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
}