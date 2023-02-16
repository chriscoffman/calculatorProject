let displayValue = '0';
let storedValue = '0';
let operator = '';

refreshValues();


const numButtons = document.querySelectorAll('#num');
const operatorButtons = document.querySelectorAll('#operator');
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => clearAll());

numButtons.forEach((button) => 
    button.addEventListener('click', () => updateDisplay(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => updateOperator(button.textContent))
)


function clearAll() {
    storedValue = '0';
    displayValue = '0';
    operator = '';
    refreshValues();
}

function updateOperator(newOperator) {
    if(operator != '') {
        operate(operator, storedValue, displayValue)
        operator = newOperator;
    } else {
        operator = newOperator;
        storedValue = displayValue;
        displayValue = '0';
        refreshValues();
    }
}

function refreshValues() {
    document.getElementById('currentNum').innerHTML = displayValue;
    document.getElementById('storedNum').innerHTML = storedValue;
}

function updateDisplay(number) {
    if (displayValue == '0'){
        displayValue = number
    } else if (displayValue.length >= 16) {
        displayValue = '0'
    } else {
        displayValue = `${displayValue}${number}`
    }
    refreshValues();
}

function add(a, b) {
    storedValue = Number(a) + Number(b);
    displayValue = 0;
    refreshValues();
}

function subtract(a, b) {
    storedValue = Number(a) - Number(b);
    displayValue = 0;
    refreshValues();
}

function multiply(a, b) {
    storedValue = Number(a) * Number(b);
    displayValue = 0;
    refreshValues();
}

function divide(a, b) {
    storedValue = Number(a) / Number(b);
    displayValue = 0;
    refreshValues();
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/': 
            if (b === 0) return null;
            else return divide(a, b);
        default:
            return null;
    }
}