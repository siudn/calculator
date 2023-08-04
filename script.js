const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equalButton = document.querySelector("#equal");
const clearAll = document.querySelector("#AC");
const clear = document.querySelector("#C");

calcArray = [];

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        calcArray.push(display.textContent);
        calcArray.push(button.textContent);
        display.textContent = '';
    })
})

equalButton.addEventListener("click", () => {
    calcArray.push(display.textContent);
    operate(calcArray[0], calcArray[2], calcArray[1])
})




const add = (a, b) => a + b;
const subtract = (a, b) => a - b
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

