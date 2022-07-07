import validator from './validator.js';

const validateBtn = document.getElementById("btn");
const tuPago = document.getElementById("pago");

function reconocerTarjeta() {
    const card = document.getElementById("cardNumb").value;
    if(card.length === 16 && card.startsWith('51') ||
  card.startsWith('52') ||
  card.startsWith('53') ||
  card.startsWith('54') ||
  card.startsWith('55')) {
  return 'tarjeta Mastercard '
      
  } else if((card.length === 16) && card.startsWith('4')) {
  return 'tarjeta Visa '
  
  } else {
      return 'tarjeta '
  }
}
    


function validateCard() {
    const creditCardNumber = document.getElementById("cardNumb").value;
    
    if(creditCardNumber.length <= 0) {
      alert('Por favor ingrese el número de tarjeta.')       
      
    } else if(validator.isValid(creditCardNumber) === true) {
        const recCard = reconocerTarjeta();
        const mask = validator.maskify(creditCardNumber);
        alert ('Tu' + ' ' + recCard + mask + ' es valida.')
        
     } else {
        const recCard = reconocerTarjeta();
        const mask = validator.maskify(creditCardNumber);
        alert ('Tu' + ' ' + recCard + mask + ' es invalida.')
    

    }

}
validateBtn.addEventListener("click", validateCard);
tuPago.addEventListener("click", pago);

function pago() {
  alert("Gracias por tu compra!");
}


