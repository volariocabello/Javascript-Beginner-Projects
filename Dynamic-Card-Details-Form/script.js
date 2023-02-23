const nameInput = document.querySelector(".name-input");
const cardInput = document.querySelector(".number-input");
const mmInput = document.querySelector(".exp-date-mm");
const yyInput = document.querySelector(".exp-date-yy");
const cvcInput = document.querySelector(".cvc");

const nameLabel = document.querySelector(".card-name-label");
const cardLabel = document.querySelector(".card-number-label");
const cvcLabel = document.querySelector(".card-cvc-label");
const mmLabel = document.querySelector(".card-mm-label");
const yyLabel = document.querySelector(".card-yy-label");

const confirmBttn = document.querySelector(".confirm-button");

const completed = document.querySelector(".completed");
const cardDetails = document.querySelector(".form");

const continueBttn = document.querySelector(".continue-button");


function setCardNumber(e) {
    cardLabel.innerText = e.target.value;
}

function setCardName(e) {
    nameLabel.innerText = e.target.value;
}

function setCardCvc(e) {
    cvcLabel.innerText = e.target.value;
}

function setCardMm(e) {
    mmLabel.innerText = e.target.value;
}

function setCardYy(e) {
    yyLabel.innerText = e.target.value;
}


function submitDetails (e) {
    e.preventDefault();

    if (cardLabel.innerHTML.length === 16 && cvcLabel.innerHTML.length === 3 && yyLabel.innerHTML.length === 2 && mmLabel.innerHTML.length === 2) {
        completed.classList.remove("hidden");
        cardDetails.classList.add("hidden");
    } else {
        alert('Complete the form accordingly')
    }
}



cardInput.addEventListener('keyup', setCardNumber);
nameInput.addEventListener('keyup', setCardName);
cvcInput.addEventListener('keyup', setCardCvc);
mmInput.addEventListener('keyup', setCardMm);
yyInput.addEventListener('keyup', setCardYy);
confirmBttn.addEventListener('click', submitDetails);
continueBttn.addEventListener('click', () => location.reload());