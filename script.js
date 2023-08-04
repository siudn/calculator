const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equalButton = document.querySelector("#equal");
const clearAll = document.querySelector("#AC");
const clear = document.querySelector("#C");

let operator ='';
let firstNumber = '';
let secondNumber ='';

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent = appendNumber(button.innerText);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.innerText;
    })
})

equalButton.addEventListener("click", () => {
    display.textContent = equals();
})

function appendNumber(value) {
    if (operator === '')
        return firstNumber += value;
    else
        return secondNumber += value;
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (num1, num2, operator) => {
    if (operator === "+")
        return add(num1, num2);
    else if (operator === "-")
        return subtract(num1, num2);
    else if (operator === "×")
        return multiply(num1, num2);
    else if (operator === "÷")
        return divide(num1, num2);
}

function equals() {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    firstNumber = operate(num1, num2, operator);
    secondNumber = '';
    return firstNumber;
}