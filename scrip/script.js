let Cardholder = JSON.parse(localStorage.getItem("CardData")) || []

//Input fields
const nameInput = document.getElementById("name-inp");
const cardNumberInput = document.querySelector(".card-number");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");
const cvcInput = document.querySelector("#cvc-inp");

//Changeable
const cardNumber = document.querySelector(".cc-number");
const cardHolder = document.querySelector(".cardholder");
const cvc = document.querySelector(".cvc-text");
const month = document.querySelector(".mm");
const year = document.querySelector(".yy");

//errors
const cardNumberError = document.querySelector(".number-error");
const cardHolderError = document.querySelector(".name-error");
const expError = document.querySelector(".exp-error")
const confirmError = document.querySelector(".confirm-error")
let ErrorCheck = false;

nameInput.addEventListener('input', () => {
    console.log(nameInput.value)
    if (nameInput.value.match(/^[A-Za-z\s]+$/)) {
        cardHolder.innerHTML = nameInput.value
        cardHolderError.style.display = "none"
        ErrorCheck = false;
    }
    else {
        cardHolderError.style.display = "unset";
        ErrorCheck = true;
    }
})

cardNumberInput.addEventListener('input', () => {
    cardNumber.style.letterSpacing  = "1.5px";
    cardNumber.style.fontSize = "27px";

    if (cardNumberInput.value.length == 0 || cardNumberInput.value === null) {
        cardNumberError.innerHTML = "type card number"
        cardNumberError.style.display = "unset";
        ErrorCheck = true;
    }
    else if (cardNumberInput.value.length > 16) {
        cardNumberError.innerHTML = "have to be 16 characters"
        cardNumberError.style.display = "unset";
        ErrorCheck = true;
    }
    else {
        cardNumber.innerHTML = cardNumberInput.value.match(/.{1,4}/g).join(' ')
        cardNumberError.style.display = "none";
        ErrorCheck = false;
    }
})

monthInput.addEventListener('input', () => {
    if (monthInput.value > 0 && monthInput.value < 13) {
        month.innerHTML = monthInput.value
        expError.style.display = "none";
        ErrorCheck = false
    }
    else {
        ErrorCheck = true;
        expError.style.display = "unset";
    }
})

yearInput.addEventListener('input', () => {
    if (yearInput.value >= 0 && yearInput.value < 100) {
        year.innerHTML = yearInput.value
        expError.style.display = "none";
        ErrorCheck = false
    }
    else {
        ErrorCheck = true;
        expError.style.display = "unset";
    }
}) 

cvcInput.addEventListener('input', () => {
    if (cvcInput.value.length < 4) {
        cvc.innerHTML = cvcInput.value
        cvcError.style.display = "none";
        ErrorCheck = false
    }
    else {
        cvcError.style.display = "unset";
        ErrorCheck = true
    }
})

function confirmBtn() {
    const form = document.querySelector(".cc-form")
    const addedCard = document.querySelector(".added-card")
    if (!ErrorCheck) {
        form.style.display = "none"
        addedCard.style.display = "block"
        confirmError.style.display = "none"
    } else {
        confirmError.style.display = "unset"
    }
}





