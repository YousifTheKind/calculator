let operatorSign;
let firstNum;
let secondNum;
let displayValue;
firstClick = true;
const display = document.querySelector("#display");
const digits = document.querySelector("#digits");
const operationButton = document.querySelector("#operationButton");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clearButton");

const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
    return firstNum - secondNum;
};

const multiply = function(firstNum, secondNum) {
    return firstNum * secondNum;
};

const divide = function(firstNum, secondNum) {
    return (firstNum / secondNum).toFixed(2);
};

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
};

const populate = function(displayValue) {
    display.textContent += displayValue;
};


digits.addEventListener("click", (e) => {
    if(!firstClick) {
        display.textContent = ""
        displayValue = e.target.getAttribute("value");
        console.log("first number from !firstClick: " + firstNum)
    };
    displayValue = e.target.getAttribute("value");
    if(typeof displayValue === "string") populate(displayValue);


});
operationButton.addEventListener("click", (e) => {

    if(firstClick){
        operatorSign = e.target.getAttribute("value")
        firstNum = Number(display.textContent);
        display.textContent = "";
        console.log("first number: " + firstNum)
        firstClick = false;    
    }
    else {
        secondNum = Number(display.textContent);
        display.textContent = "";
        console.log("2nd number: " + secondNum);
        let result = operate(operatorSign, firstNum, secondNum);
        populate(result);
        firstNum = result;
        operatorSign = e.target.getAttribute("value")
        console.log(operatorSign);
    }
});

equal.addEventListener("click", () => {
    secondNum = Number(display.textContent);
    display.textContent = "";
    console.log("2nd number: " + secondNum);
    let result = operate(operatorSign, firstNum, secondNum);
    populate(result);
});


clear.addEventListener("click", () => {
    display.textContent = "";
    firstNum = null;
    secondNum = null;
    operatorSign = null;
});
