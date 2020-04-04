const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
const display = document.querySelector('.display');
display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.botonera');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operacion')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('coma')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('borrar')) {
        console.log('boton', target.value);
        return;
    }

    if (target.classList.contains('limpiar')) {
        resetCalculator()
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    
    console.log(calculator);
    }  

function inputDecimal(coma) {
    if (!calculator.displayValue.includes(coma)) {
        calculator.displayValue += coma;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
};
  
  
function inputDigit(digit) {
const { displayValue, waitingForSecondOperand } = calculator;

if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
} else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

console.log(calculator);
}  

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}