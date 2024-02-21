let operatorSign;
let firstNum;
let secondNum;
let displayValue;
const display = document.querySelector("#display");
const digits = document.querySelector("#digits");

const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
}

const subtract = function(firstNum, secondNum) {
    return firstNum - secondNum;
}

const multiply = function(firstNum, secondNum) {
    return firstNum * secondNum;
}

const divide = function(firstNum, secondNum) {
    return (firstNum / secondNum).toFixed(2);
}

const operate = function(operator, firstNum, secondNum) {
    let result;

    switch(operator) {
        case "+":
            result = add(firstNum, secondNum);
            break;
        case "-":
            result = subtract(firstNum, secondNum);
            break;
        case "*":
            result = multiply(firstNum, secondNum);
            break;
        case "/":
            result = divide(firstNum, secondNum);
        default:
            return "something went wrong!"
    }

    return result;
}

digits.addEventListener("click", (e) => {
    displayValue = e.target.getAttribute("value");
    populate(displayValue)
})

const populate = function(displayValue) {
    display.textContent = displayValue;
} 

