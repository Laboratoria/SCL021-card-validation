import validator from './validator.js';

const validateBtn = document.getElementById("btn");
//const mask = validator.maskify(creditCardNumber);

function validateCard() {
    const creditCardNumber = document.getElementById("cardNumb").value;
    if(validator.isValid(creditCardNumber) === true) {
        alert ('Tu tarjeta es valida.')
        
     } else {
       alert("invalida")
    }

}


validateBtn.addEventListener("click", validateCard)