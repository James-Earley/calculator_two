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
function evaluateExpression (event) {
    // checks to see if all equaltion elements are present and then converts strings to numbers and to new variables
    if (currentOperator && currentOperand && display.value) {
        const operand1 = parseFloat(currentOperand);
        const operand2 = parseFloat(display.value);
        let result;
    
    // html operators are mapped to their corresponding operations
     const operations = {
       "+": (a, b) => a + b,
       "-": (a, b) => a - b,
       "*": (a, b) => a * b,
       "/": (a, b) => a / b,
     };

    //selects the correct operation by running the currentOperator against the object of operations and passed the rights values into the equation. 
        if (currentOperator in operations) {
        result = operations[currentOperator](operand1, operand2);
    }
    // if the above operation is run, and result is now defined, the display value is now set to result and the current operator and operand results are nulled to reset them for any further user inputs
    if (result !== undefined) {
        display.value = result;
        currentOperator = null;
        currentOperand = null;
    }
}
}
