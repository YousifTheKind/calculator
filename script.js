let operatorSign;
let firstNum;
let secondNum;

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

console.log(operate("+", 9, 3));