import validator from './validator.js';

const validateBtn = document.getElementById("btn")
btn.addEventListener("click", validateCard)

function validateCard() {

let creditCardNumber = document.getElementById("cardNumb");
    if(validator.isValid(creditCardNumber) === true) {
        alert ('valida')
    } else {
    alert("invalida")
    }

}