const validator = {
  isValid(creditCardNumber) {
    //console.log(creditCardNumber)
    let total = 0;
    /* Dividir el user input en números individuales, 
    transformar esto en un array y luego cambiar el tipo a número */
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
    return creditCardNumber.slice(0,-4).replace(/./g,"#") + (' ') + creditCardNumber.slice(-4);
    

     }
  
};



export default validator



