/// grab the elements 
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

/// the variables 
let currentOperator = null;
let currentOperand = null;

/// event listeners 

buttons.addEventListener("click", handleButtonClick);
clearButton.addEventListener("click", clearDisplay);
equalsButton.addEventListener("click", evaluateExpression);

function handleButtonClick (event) {
    const button = event.target;
    console.log(button);
}

function clearDisplay (event) {}

function evaluateExpression (event) {}