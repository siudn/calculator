const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equalButton = document.querySelector("#equal");
const clearAll = document.querySelector("#AC");
const clear = document.querySelector("#C");

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        if (operator === '')
            firstNumber = Number(display.textContent);
        else
            secondNumber = Number(display.textContent);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (secondNumber !== 0)
            equals()
        operator = button.textContent;
        display.textContent = '';
    })
})

equalButton.addEventListener("click", () => {
    equals();
})

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
    else if (operator === "/")
        return divide(num1, num2);
}

const equals = () => {
    firstNumber = operate(firstNumber, secondNumber, operator);
    display.textContent = firstNumber;
}

