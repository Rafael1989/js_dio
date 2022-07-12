const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];
const darkModeClass = "dark-mode";


button.addEventListener("click", toogleDarkMode);

function toogleDarkMode(){
    h1.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    changeText();
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = "Light Mode";
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}