const decrBttn = document.querySelector(".decrease-bttn");
const resBttn = document.querySelector(".reset-bttn");
const incrBttn = document.querySelector(".increase-bttn");
const counter = document.querySelector(".active-counter");

let count = 0;

let changeColor = () => {
    if (count === 0) {
        counter.style.color = "black";
    } else if (count > 0)  {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    }
}


let decrNum = () => {
    count--;
    counter.innerHTML = count;
    changeColor();
}

let resNum = () => {
    count = 0;
    counter.innerHTML = count;
    changeColor();
}

let incrNum = () => {
    count++;
    counter.innerHTML = count;
    changeColor();
}


decrBttn.addEventListener('click', decrNum);
resBttn.addEventListener('click', resNum);
incrBttn.addEventListener('click', incrNum);
