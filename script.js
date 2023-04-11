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

function handleButtonClick(event) {
  const button = event.target;
  if (button.classList.contains("number")) {
    appendToDisplay(button.getAttribute("data-number"));
  } else if (button.classList.contains("operator")) {
    setOperator(button.getAttribute("data-operator"));
  }
}

function appendToDisplay(number) {
    display.value += parseFloat(number);
}

function setOperator() {}

function clearDisplay (event) {}

function evaluateExpression (event) {}