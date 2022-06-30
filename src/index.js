import validator from './validator.js';

console.log(validator);
const validateBtn = document.getElementById("btn");
validateBtn.addEventListener(click, validCard)

function validCard() {
    document.getElementById("validPopUp").classList.add('show');
}