

const imgDiv = document.querySelector(".img-arrow");
const table = document.querySelector(".table-container");
const arrowRight = document.querySelector(".arrow-left");
const containTweet = document.querySelector(".tweets-container");
const navLi = document.querySelector(".ul");
const linksMobile = document.querySelector(".links-mobile");
const burguerMenu = document.querySelector(".burger-menu");

imgDiv.addEventListener("click", desp);
arrowRight.addEventListener("click", translateAcounts);
burguerMenu.addEventListener("click", deployMenu);

clickMenuMobile.addEventListener("click", openShowMenu)

function openShowMenu(){
   navLi.classList.remove("view");
}

function deployMenu(){
    linksMobile.classList.toggle("deploy");
    burguerMenu.classList.toggle("bgnd");
}

function desp(){
    imgDiv.nextEAlementSibling;
    if (imgDiv.nextElementSibling == table) {
        table.classList.toggle("block")
    }
};

function translateAcounts(){
    containTweet.classList.toggle("traslate");
};