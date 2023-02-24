const billInput = document.querySelector(".bill-input");
const fiveBox = document.querySelector(".percent-five");
const tenBox = document.querySelector(".percent-ten");
const fifteenBox = document.querySelector(".percent-fifteen");
const twentyfiveBox = document.querySelector(".percent-twentyfive");
const fiftyBox = document.querySelector(".percent-fifty");
const customBox = document.querySelector(".percent-custom");
const noOfPeople = document.querySelector(".number-of-people-input");
const bigPriceAmount = document.querySelector(".big-price-amount");
const bigPriceTotal = document.querySelector(".big-price-total");
const resetButton = document.querySelector(".reset-bttn");
const labelFive = document.querySelector(".label-five");
const labelFifteen = document.querySelector(".label-fifteen");
const labelTwentyFive = document.querySelector(".label-twentyfive");
const labelFifty = document.querySelector(".label-fifty");
const labelTen = document.querySelector(".label-ten");
const tips = document.querySelectorAll(".tips");

function changeActive (e) {
    tips.forEach(element => {
        element.classList.remove("active-tip")
        if (e.target.parentElement === element) {
            element.classList.add("active-tip")
        }
    })
}


function doTheMath(e) {
    let peopleSum = noOfPeople.value;
    let billSum = billInput.value;
    let customSum = customBox.value;
    let totalAmountSum = billSum / peopleSum;
    let tipSum;

    if (customSum.length > 0) {
        fiveBox.checked = false;
        tenBox.checked = false;
        fifteenBox.checked = false;
        twentyfiveBox.checked = false;
        fiftyBox.checked = false;
    }


    if (fiveBox.checked) {
        tipSum = ((5/100) * billSum) / peopleSum;
        bigPriceAmount.innerHTML = "$" +tipSum;
        bigPriceTotal.innerHTML = "$" + totalAmountSum;
    } else if (tenBox.checked) {
        tipSum = ((10/100) * billSum) / peopleSum;
        bigPriceAmount.innerHTML = "$" +tipSum;
        bigPriceTotal.innerHTML = "$" + totalAmountSum;
    } else if (fifteenBox.checked) {
        tipSum = ((15/100) * billSum) / peopleSum;
        bigPriceAmount.innerHTML = "$" +tipSum;
        bigPriceTotal.innerHTML = "$" + totalAmountSum;
    } else if (twentyfiveBox.checked) {
        tipSum = ((25/100) * billSum) / peopleSum;
        bigPriceAmount.innerHTML = "$" +tipSum;
        bigPriceTotal.innerHTML = "$" + totalAmountSum;
    } else if (fiftyBox.checked) {
        tipSum = ((50/100) * billSum) / peopleSum;
        bigPriceAmount.innerHTML = "$" +tipSum;
        bigPriceTotal.innerHTML = "$" + totalAmountSum;
    } else if (customSum.length > 0) {
        tipSum = ((customSum/100) * billSum) / peopleSum;
        bigPriceAmount.innerHTML = "$" +tipSum;
        bigPriceTotal.innerHTML = "$" + totalAmountSum;
    }
    
}

function unCheck () {
    customBox.value = "";
}

function resetAll () {
    billInput.value = "";
    noOfPeople.value = "";
    customBox.value = "";
    fiveBox.checked = false;
    tenBox.checked = false;
    fifteenBox.checked = false;
    twentyfiveBox.checked = false;
    fiftyBox.checked = false;
    bigPriceAmount.innerHTML = "$0.00";
    bigPriceTotal.innerHTML = "$0.00";
}


noOfPeople.addEventListener('keyup', doTheMath);
billInput.addEventListener('keyup', doTheMath);
customBox.addEventListener('keyup', doTheMath);

fiveBox.addEventListener('click', doTheMath);
tenBox.addEventListener('click', doTheMath);
fifteenBox.addEventListener('click', doTheMath);
twentyfiveBox.addEventListener('click', doTheMath);
fiftyBox.addEventListener('click', doTheMath);

fiveBox.addEventListener('click', unCheck);
tenBox.addEventListener('click', unCheck);
fifteenBox.addEventListener('click', unCheck);
twentyfiveBox.addEventListener('click', unCheck);
fiftyBox.addEventListener('click', unCheck);

resetButton.addEventListener('click', resetAll);

fiveBox.addEventListener('click', changeActive);
tenBox.addEventListener('click', changeActive);
fifteenBox.addEventListener('click', changeActive);
twentyfiveBox.addEventListener('click', changeActive);
fiftyBox.addEventListener('click', changeActive);
