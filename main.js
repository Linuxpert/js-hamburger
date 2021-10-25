const hamburger = document.querySelector(".header-right > a");
const hamMenu = document.querySelector (".hamburger-menu");
const closeMenu = document.querySelector(".close");

//apertura menu
hamburger.addEventListener('click',
    function() {
        hamMenu.classList.add("active");
    }
)

//chiusura menu
closeMenu.addEventListener('click',
    function() {
        hamMenu.classList.remove("active");
    }
)
