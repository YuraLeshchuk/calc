const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
   display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
   display.value += ev.target.innerText;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    display.value = eval.(display.value);
}

document.querySelector('.clear').addEventListener('click', reset);

function reset() {
   display.value = "";
}

document.querySelector('.decimal').addEventListener('click', displayDecimal);

function displayDecimal() {
    display.value = display.value + '.';
}
    
document.querySelector('.back').addEventListener('click', deletLast);

function deletLast() {
    const exp = display.value;
    display.value = exp.substring(0, exp.length-1);
}