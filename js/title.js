const welcomeTitle = document.querySelector(".welcome__title");
const welcome = welcomeTitle.querySelector("h1");
const link = welcomeTitle.querySelector("a");

const HIDDEN = "hidden";

function goToLink(){
    link.classList.remove(HIDDEN);
    welcome.classList.add(HIDDEN);
}
function backTitle(){
    link.classList.add(HIDDEN);
    welcome.classList.remove(HIDDEN);
}

welcome.addEventListener("mouseenter", goToLink);
welcomeTitle.addEventListener("mouseleave", backTitle);
