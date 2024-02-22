let operatorSign;
let firstNum;
let secondNum;
let displayValue;
let firstClick = true;
let resultOnScreen = false;
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
    return (firstNum / secondNum);
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
            break;
        default:
            console.log("something went wrong!")
            return "something went wrong!"
    }

    return Math.round(result * 100) / 100;
};

const populate = function(displayValue) {

    if(displayValue == " ") {
        display.textContent = " ";
    }
    else if(typeof displayValue === "string" || typeof displayValue === "number") {
        display.textContent += displayValue
    };

};


digits.addEventListener("click", (e) => {
    if(resultOnScreen) {populate(" "); resultOnScreen = false}
    if(!firstClick) {
        displayValue = e.target.getAttribute("value");
        populate(displayValue);
    }
    else {
        displayValue = e.target.getAttribute("value");
        populate(displayValue);
    };

});
operationButton.addEventListener("click", (e) => {

    if(firstClick){
        operatorSign = e.target.getAttribute("value")
        firstNum = Number(display.textContent);
        display.textContent = "";
        firstClick = false;    
    }
    else {
        secondNum = Number(display.textContent);
        populate(" ");
        let result = operate(operatorSign, firstNum, secondNum);
        populate(result);
        firstNum = result;
        operatorSign = e.target.getAttribute("value")
    }
});

equal.addEventListener("click", () => {
    console.log("first click: " + firstClick);
    if(!firstClick) {
        secondNum = Number(display.textContent);
        populate(" ");
        let result = operate(operatorSign, firstNum, secondNum);
        populate(result);
        firstClick = true;
        resultOnScreen = true;
    }
});


clear.addEventListener("click", () => {
    display.textContent = "";
    firstNum = null;
    secondNum = null;
    operatorSign = null;
});
