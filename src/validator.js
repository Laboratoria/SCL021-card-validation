const validator = {
    isValid(creditCardNumber) {
      //console.log(creditCardNumber)
      let total = 0;
      /* Dividir el user input en números individuales, transformar esto en 
      un array y luego cambiar el tipo a número */
      let ccNumbArray = creditCardNumber.split("").map(Number);
  
      //invertir el orden del array
      ccNumbArray.reverse();
  //console.log(ccNumbArray)
      //multiplicar *2 cada número en posición par
      for(let i = 0; i < ccNumbArray.length; i++) {
        if(i % 2 === 1) {
          ccNumbArray[i] = ccNumbArray[i] * 2;
        }
  
        //buscar en el array números mayores a 9 y restarle 9 a estos
        ccNumbArray = ccNumbArray.map((numb) => numb > 9 ? numb -9 : numb);
  
        //sumar los dígitos del array para obtener el total
        total = total + ccNumbArray[i];   
      }
      //console.log(total)
      if(total % 10 === 0){
        return true;
      } else {
        return false;
      //console.log(total)
      }
    },

    maskify(creditCardNumber) {
      return creditCardNumber.slice(0,-4).replace(/./g,"#").slice(-4);
       }
    
  };
  

  
  export default validator
  /*

  var cc = "ABCD 1234 *!X£ 9999";
  function maskify(input) {
    return input.slice(0,-4).replace(/./g, "*") + input.slice(-4);
  }
  
  document.getElementById("mask").innerHTML = maskify(cc); 
  
  function ultimosDigitos() {
    var uDigitos = document.getElementById("digitos").value;
    document.getElementById("digitos").innerHTML = "Tus ultimos 4 digitos son: " + document.getElementById("mask").innerHTML = maskify;
  }
  
  console.log('ultimosDigitos')


//PROBANDO

  function escribir2() {
    let valor = document.getElementById('entrada').value;

    let numeroTarjeta = ' '+valor.slice(0,-4).replace(/./g,"#")+valor.slice(-4);
    // maskify
    document.getElementById('cont3').innerHTML = numeroTarjeta;
    //4 últimos digitos de la tarjeta
    document.getElementById('cont4').innerHTML=''+valor.slice(-4)+' son los últimos 4 digitos de tu tarjeta.'

    //Tarjeta de credito es valida || invalida
    if (valid_credit_card(valor) === true) {
       return document.getElementById('cont5').innerHTML = valor + 'La tarjeta es valida.'
    } else { 
        return document.getElementById('cont5').innerHTML = valor + 'Tu tarjeta es ivalida.' 
    }
    */
























/*const recognizeMasterCard = (input) =>
  (input.length === 16 && input.startsWith('51')) ||
  input.startsWith('52') ||
  input.startsWith('53') ||
  input.startsWith('54') ||
  input.startsWith('55')
    ? true
    : false;

const recognizeVisa = (input) =>
  ( input.length === 16) && input.startsWith('4')
    ? true
    : false;

const validateCardNumber = (input) => {
  let sum = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    if (i % 2 === 0) { /*residuo se divide entre 2 si da 0 es par sino es inpar*/ /*
      const multiplyInput = input[i] * 2;
      if (multiplyInput > 9) {
        Array.from(String(multiplyInput), Number).forEach((e) => {
          sum += e;
        });
      } else {
        sum += multiplyInput;
      }
    } else {
      sum += Number(input[i]);
    }
  }

  if (sum % 10 !== 0) {
    throw new Error('Invalid Card Number');
  }
};

const validator = (nr) => {
  try {
    validateCardNumber(nr);
  } catch (error) {
    throw Error(error.message);
  }

if (recognizeMasterCard(nr)) {
    return 'valid MasterCard';
  } else if (recognizeVisa(nr)) {
    return 'valid Visa';

  } else {
    throw new Error('Invalid Card Number');
  }

export default validator;

var cc = "ABCD 1234 *!X£ 9999";

function maskify(input) {
  return input.slice(0,-4).replace(/./g, "#") + input.slice(-4);
}

document.getElementById("mask").innerHTML = maskify(cc); 

*/
/*

function maskify(input) {
  return input.slice(0,-4).replace(/./g, "*") + input.slice(-4);
}

document.getElementById("mask").innerHTML = maskify(cc); 

function ultimosDigitos() {
  var uDigitos = document.getElementById("digitos").value;
  document.getElementById("digitos").innerHTML = "Tus ultimos 4 digitos son: " + document.getElementById("mask").innerHTML = maskify;
}

console.log('ultimosDigitos')

//PROBANDO 
function escribir2() {
    let valor = document.getElementById('entrada').value;

    let numeroTarjeta = ' '+valor.slice(0,-4).replace(/./g,"#")+valor.slice(-4);
    // maskify
    document.getElementById('cont3').innerHTML = numeroTarjeta;
    //4 últimos digitos de la tarjeta
    document.getElementById('cont4').innerHTML=''+valor.slice(-4)+' son los últimos 4 digitos de tu tarjeta.'

    //Tarjeta de credito es valida || invalida
    if (valid_credit_card(valor) === true) {
       return document.getElementById('cont5').innerHTML = valor + 'La tarjeta es valida.'
    } else { 
        return document.getElementById('cont5').innerHTML = valor + 'Tu tarjeta es ivalida.'
    }
    
} 
 */
