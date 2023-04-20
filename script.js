/// grab the elements 
const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

/// the variables 
let firstOperator = null;
let firstOperand = null;
let secondOperator = null;


/// event listeners 

buttons.addEventListener("click", handleButtonClick);
clearButton.addEventListener("click", clearDisplay);
equalsButton.addEventListener("click", operate);

// event handler for button pushes (add operand updaters)
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

// sets the operator, places the present display value into firstOperand and then empties the display
function setOperator(operator) {
    if (firstOperator !== null) {
    operate(); 
    }
    firstOperator = operator;
    firstOperand = display.value;
    display.value = "";
}

/// clears the dsiplay 
function clearDisplay (event) {
    display.value = "";
    firstOperator = null;
    firstOperand = null;
    secondOperator = null;
}

// does the equation 
function operate () {
  let result;
  // html operators are mapped to their corresponding operations
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  // checks to see if all equaltion elements are present and then converts strings to numbers and to new variables
  if (firstOperator && firstOperand && display.value) {
    const operand1 = parseFloat(firstOperand);
    const operand2 = parseFloat(display.value);

    //selects the correct operation by running the firstOperator against the object of operations and passed the rights values into the equation.
    if (firstOperator in operations) {
      result = operations[firstOperator](operand1, operand2);
    }
    // if the above operation is run, and result is now defined, the display value is now set to result and the current operator and operand results are nulled to reset them for any further user inputs
    if (result !== undefined) {
      display.value = result;
      firstOperator = null;
      firstOperand = null;
    }
  }

  
  
}
