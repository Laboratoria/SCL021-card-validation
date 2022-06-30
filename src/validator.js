const validator = {
  isValid(creditCardNumber) {
    let ccNumbArray = creditCardNumber.toString().split("").map(Number);
    ccNumbArray.reverse();
    //console.log(ccNumbArray);
   
  }
  };
console.log(ccNumbArray)



validator.isValid(123456);


const recognizeMasterCard = (input) =>
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
    if (i % 2 === 0) { /*residuo se divide entre 2 si da 0 es par sino es inpar*/ 
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