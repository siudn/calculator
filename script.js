const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equalButton = document.querySelector("#equal");
const AC = document.querySelector("#AC");
const C = document.querySelector("#C");
const signChanger = document.querySelector("#negative");
const decimalButton = document.querySelector("#decimal");

let operator = '';
let firstNumber = '';
let secondNumber = '';

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent = appendNumber(button.innerText);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber != '' && secondNumber != '')
            display.textContent = equals();
        operator = button.innerText;
    })
})

equalButton.addEventListener("click", () => {
    if (firstNumber !== '' && secondNumber !== '')
    {
        display.textContent = equals();
        operator = '';
    }
})

AC.addEventListener("click", () => clearAll())
C.addEventListener("click", () => clearCurrent())
signChanger.addEventListener("click", () => display.textContent = changeSign())

function clearAll() {
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

function clearCurrent() {
    display.textContent = '';
    if (operator === '')
        return firstNumber = '';
    else
        return secondNumber = '';
}

function changeSign() {
    if (operator === '') {
        return firstNumber *= -1;
    } else
        return secondNumber *= -1;
}

function appendNumber(value) {
    if (operator === '')
        return firstNumber += value;
    else
        return secondNumber += value;
}

function equals() {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    firstNumber = operate(num1, num2, operator);
    secondNumber = '';
    return firstNumber;
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
        if (num2 === 0)
            return "ERROR!";
        return divide(num1, num2);
}

