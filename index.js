const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", openMenu);

function openMenu() {
    const nav = document.getElementById("nav");
    console.log(nav);
    nav.classList.add("open-nav");
    // nav.style.display = "block"; 
};


close.addEventListener("click", closeNav);

function closeNav() {
    const nav = document.getElementById("nav");
    console.log(nav);
    nav.classList.remove("open-nav")
    // nav.style.display = "none"; 
}



console.log(menu)
console.log(close)