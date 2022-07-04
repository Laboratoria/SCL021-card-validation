import validator from './validator.js';

const validateBtn = document.getElementById("btn");

function validateCard() {
    const creditCardNumber = document.getElementById("cardNumb").value;
    
    if(validator.isValid(creditCardNumber) === true) {
        const mask = validator.maskify(creditCardNumber);
        alert ('Tu tarjeta ' + mask + ' es valida.')
        
     } else {
    
       creditCardNumber = maskify


    }

}


validateBtn.addEventListener("click", validateCard)