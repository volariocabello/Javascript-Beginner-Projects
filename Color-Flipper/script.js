const button = document.querySelector(".change-color-bttn");
const color = document.querySelector(".color");

let generateColor = () => {
    let newColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + newColor;
    color.innerHTML = "#" + newColor;
}

button.addEventListener('click', generateColor);