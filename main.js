const hamburger = document.querySelector(".header-right > a");
const hamMenu = document.querySelector (".hamburger-menu");

//apertura menu
hamburger.addEventListener('click',
    function() {
        hamMenu.classList.add("active");
    }
)

//chiusura menu