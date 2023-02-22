const menuBttn = document.querySelector(".menu-button");
const toggleList = document.querySelector(".for-toggle-list");
const body = document.querySelector("body");

menuBttn.addEventListener('click', () => {
    toggleList.classList.toggle("hidden")
});