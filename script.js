let firstNumber = 0;
let secondNumber = 0;
let operator;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (num1, num2, operator) => {
    if (operator === "+")
        add(num1, num2);
    else if (operator === "-")
        subtract(num1, num2);
    else if (operator === "*")
        multiply(num1, num2);
    else if (operator === "/")
        divide(num1, num2);
}