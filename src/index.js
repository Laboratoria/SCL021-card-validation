import validator from './validator.js';

const validateBtn = document.getElementById("btn");

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
    
    if(validator.isValid(creditCardNumber) === true) {
        const recCard = reconocerTarjeta();
        const mask = validator.maskify(creditCardNumber);
        alert ('Tu' + ' ' + recCard + mask + ' es valida.')
        
     } else {
        const recCard = reconocerTarjeta();
        const mask = validator.maskify(creditCardNumber);
        alert ('Tu' + ' ' + recCard + mask + ' es invalida.')
    

    }

}

export default validator;
validateBtn.addEventListener("click", validateCard)