var num1 = "", num2 = "", operator;
var screen = document.querySelector("#screen");

function userPress(userInputs) {
    if (operator) {
        num2 = num2 + userInputs;
        printOnScreen(num2);
    }
    else {
        num1 = num1 + userInputs;
        printOnScreen(num1);
    }
}

function assignOperator(operatorName) {
    operator = operatorName;
}

function printOnScreen(digits) {
    screen.innerHTML = digits;
}

function evaluateMaths() {
    var sum;
    if (operator === "+") sum = Number(num1) + Number(num2);
    else if (operator === "-") sum = Number(num1) - Number(num2);
    else if (operator === "*") sum = Number(num1) * Number(num2);
    else if (operator === "/") sum = Number(num1) / Number(num2);

    printOnScreen(sum);
}

function clearCalc() {
    screen.innerHTML = 0;
    num1 = "", num2 = "", operator = undefined;
}