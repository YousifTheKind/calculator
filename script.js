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
// functions that does the operations rounds the result then returns it

const add = function(firstNum, secondNum) {
    return Math.round((firstNum + secondNum) * 100) / 100;
};

const subtract = function(firstNum, secondNum) {
    return Math.round((firstNum - secondNum) * 100) / 100;
};

const multiply = function(firstNum, secondNum) {
    return Math.round((firstNum * secondNum) * 100) / 100;
};

const divide = function(firstNum, secondNum) {
    if(secondNum == 0) return "nice try";
    return Math.round((firstNum / secondNum) * 100) / 100;
};
// function that calls the correct function based on inputs
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

    return result;
};

// displays the display value if it's not NaN or null
const populate = function(displayValue) {
    if(displayValue === " ") {
        display.textContent = " ";
    }
    else if(typeof displayValue === "string" || typeof displayValue === "number") {
        displayValue = String(displayValue);
        display.textContent += displayValue;
    };

};

// displays digits upon click
digits.addEventListener("click", (e) => {
    if(resultOnScreen) {populate(" "); resultOnScreen = false}
    displayValue = e.target.getAttribute("value");
    populate(displayValue);

});

// takes what's being displayed as the first number if it's before firstClick
// otherwise it takes what's displayed as the second number
operationButton.addEventListener("click", (e) => {

    if(firstClick){
        operatorSign = e.target.getAttribute("value")
        firstNum = Number(display.textContent);
        populate(" ");
        firstClick = false;    
    }
    else {
        secondNum = Number(display.textContent);
        populate(" ");
        let result = operate(operatorSign, firstNum, secondNum);
        populate(result);
        resultOnScreen = true;
        firstNum = result;
        operatorSign = e.target.getAttribute("value")
    }
});

 // checks if it's not the first time, meaning first & second numbers hold a value

equal.addEventListener("click", () => {
    if(!firstClick) {
        secondNum = Number(display.textContent);
        populate(" ");
        let result = operate(operatorSign, firstNum, secondNum);
        populate(result);
        firstClick = true;
        resultOnScreen = true;
        console.log(result);
    }
});

// reset variables
clear.addEventListener("click", () => {
    populate(" ");
    firstNum = null;
    secondNum = null;
    operatorSign = null;
});

