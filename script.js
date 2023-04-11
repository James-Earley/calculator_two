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

// event handler for button pushes
function handleButtonClick(event) {
  const button = event.target;
  if (button.classList.contains("number")) {
    appendToDisplay(button.getAttribute("data-number"));
  } else if (button.classList.contains("operator")) {
    setOperator(button.getAttribute("data-operator"));
  }
}

// appends number to display 
function appendToDisplay(number) {
    display.value += parseFloat(number);
}

// sets the operator, places the present display value into currentOperand and then empties the display
function setOperator(operator) {
    currentOperator = operator;
    currentOperand = display.value;
    display.value = "";
}

/// clears the dsiplay 
function clearDisplay (event) {
    display.value = "";
    currentOperator = null;
    currentOperand = null;
}

// does the equation 
function evaluateExpression (event) {}